import {mock, MockProxy} from 'jest-mock-extended';

import { CreateGameInteractor } from './CreateGameInteractor'
import { BoundaryGame } from '../model/BoundaryGame';
import { Game } from '../../domain/Game';

import WordsGateway from '../../gateway/api/WordsGateway'
import GamesGateway from '../../gateway/api/GamesGateway'

const WORDS_GW: MockProxy<WordsGateway> = mock<WordsGateway>();
const GAMES_GW: MockProxy<GamesGateway> = mock<GamesGateway>();

const gameCreator = new CreateGameInteractor(WORDS_GW, GAMES_GW);

describe("GameCreator", () => {
    test("Can create game", () => {
        const id = 1
        const testWord = "TEST"
        const hiddenTestWord = "####"

        WORDS_GW.loadWord.mockReturnValue(testWord)
        GAMES_GW.generateId.mockReturnValue(id)

        const createdGame = gameCreator.createGame()

        const newGame = GAMES_GW.addGame.mock.calls[0][0];
        
        expect(WORDS_GW.loadWord).toHaveBeenCalled();
        expect(GAMES_GW.generateId).toHaveBeenCalled();

        assertGameGatewayAddGameParam(newGame, id, testWord);

        assertInteractorOutput(createdGame, id, hiddenTestWord);
    });

    function assertGameGatewayAddGameParam(game: Game, id:number, word: string){
        expect(game.getId()).toEqual(id)
        expect(game.getGuessedLetters()).toEqual([])
        expect(game.getWrongLetters()).toEqual([])
        expect(game.getWord()).toEqual(word);
    }

    function assertInteractorOutput(game: BoundaryGame, id:number, word: string){
        expect(game.getId()).toEqual(id)
        expect(game.getGuessedLetters()).toEqual([])
        expect(game.getWrongLetters()).toEqual([])
        expect(game.getHiddenWord()).toEqual(word);
    }
});