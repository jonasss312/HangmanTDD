import {mock, MockProxy} from 'jest-mock-extended';

import { CreateGameInteractor } from './GameCreator'
import { BoundaryGame } from '../model/BoundaryGame';

import WordsGateway from '../../gateway/api/WordsGateway'
import GamesGateway from '../../gateway/api/GamesGateway'

const testFileName: string = '../../../testWords.txt';

const WORDS_GW: MockProxy<WordsGateway> = mock<WordsGateway>();
const GAMES_GW: MockProxy<GamesGateway> = mock<GamesGateway>();

const gameCreator = new CreateGameInteractor(WORDS_GW, GAMES_GW);

describe("GameCreator", () => {
    test("Can create game", () => {
        const testWord = "TEST"
        const hiddenTestWord = "####"

        WORDS_GW.loadWord.mockReturnValue(
            testWord
        )
        GAMES_GW.generateId.mockReturnValue(
            1
        )

        const createdGame = gameCreator.createGame()

        const isGameBoundary = createdGame instanceof BoundaryGame;
        const newGame = GAMES_GW.addGame.mock.calls[0][0];
        
        expect(WORDS_GW.loadWord).toHaveBeenCalled;
        expect(GAMES_GW.addGame).toBeCalledWith(newGame);
        expect(GAMES_GW.generateId).toHaveBeenCalled;

        expect(newGame.getId()).toEqual(1)
        expect(newGame.getGuessedLetters()).toEqual([])
        expect(newGame.getWrongLetters()).toEqual([])
        expect(newGame.getWord()).toEqual(testWord)

        expect(isGameBoundary).toEqual(true);
    });
});