import { mock, MockProxy } from 'jest-mock-extended';

import { UpdateGameInteractor } from './UpdateGameInteractor'
import { CreateGameInteractor } from './CreateGameInteractor';

import { BoundaryGame } from '../model/BoundaryGame';
import { Game } from '../../domain/Game';

import GamesGateway from '../../gateway/api/GamesGateway'
import WordsGateway from '../../gateway/api/WordsGateway';

const GAMES_GW: MockProxy<GamesGateway> = mock<GamesGateway>();
const WORDS_GW: MockProxy<WordsGateway> = mock<WordsGateway>();

const CREATE_GAME_INTERACTOR = new CreateGameInteractor(WORDS_GW, GAMES_GW);

let updateGameInteractor: UpdateGameInteractor;

beforeEach(() => {
    updateGameInteractor = new UpdateGameInteractor(GAMES_GW, CREATE_GAME_INTERACTOR);
})

describe("UpdateGameInteractor", () => {
    test("Can update existing game", () => {
        const updatedHiddenWord = "T##T";
        const hiddenWord = "####";
        const word = "TEST";
        const gameId = 100;

        const requestingToUpdateGameBoundary = new BoundaryGame(gameId, ["B"], ["C", "D"], hiddenWord, "T");
        const expectedGameBoundary = new BoundaryGame(gameId, ["B","T" ], ["C", "D"], updatedHiddenWord, "");

        GAMES_GW.getGame
            .mockReturnValue(new Game(gameId, ["B"], ["C", "D"], word));

        const updatedGameBoundary = updateGameInteractor.upsertGame(requestingToUpdateGameBoundary);

        expect(updatedGameBoundary).toEqual(expectedGameBoundary);
    });

    test("Can create new game if game that we want to update does not exist", () => {
        const hiddenWord = "####";
        const word = "TEST";
        const gameId = 100;

        const requestingToUpdateGameBoundary = new BoundaryGame(gameId, ["B"], ["C", "D"], hiddenWord, "T");

        WORDS_GW.loadWord.mockReturnValue(word);
        GAMES_GW.generateId.mockReturnValue(gameId+1);
        GAMES_GW.getGame.mockReturnValue(new Game(0, [], [], ""));

        const updatedGameBoundary = updateGameInteractor.upsertGame(requestingToUpdateGameBoundary);

        expect(updatedGameBoundary.getId()).toEqual(gameId+1);
        expect(updatedGameBoundary.getGuessedLetters()).toEqual([]);
        expect(updatedGameBoundary.getWrongLetters()).toEqual([]);
        expect(updatedGameBoundary.getHiddenWord()).toEqual(hiddenWord);
        expect(updatedGameBoundary.getGuessingLetter()).toEqual("");
    });
});