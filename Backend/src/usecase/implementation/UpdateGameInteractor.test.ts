import { mock, MockProxy } from 'jest-mock-extended';

import { UpdateGameInteractor } from './UpdateGameInteractor'

import { BoundaryGame } from '../model/BoundaryGame';
import { Game } from '../../domain/Game';

import GamesGateway from '../../gateway/api/GamesGateway'
import { GameStatus } from '../../domain/GameStatus';
import { GameD2BConverter } from './GameD2BConverter';

const GAMES_GW: MockProxy<GamesGateway> = mock<GamesGateway>();

const GAME_D2B_CONVERTER = new GameD2BConverter();

let updateGameInteractor: UpdateGameInteractor;

beforeEach(() => {
    updateGameInteractor = new UpdateGameInteractor(GAMES_GW, GAME_D2B_CONVERTER);
})

describe("UpdateGameInteractor", () => {
    test("Can update existing game", () => {
        const updatedHiddenWord = "T##T";
        const hiddenWord = "####";
        const word = "TEST";
        const gameId = 100;
        const guessNumber = 3;

        const requestingToUpdateGameBoundary =
            new BoundaryGame(gameId, ["B"], ["C", "D"], hiddenWord, "T", guessNumber, GameStatus.InProgress);
        const expectedGameBoundary =
            new BoundaryGame(gameId, ["B", "T"], ["C", "D"], updatedHiddenWord, "", guessNumber + 1, GameStatus.InProgress);

        GAMES_GW.getGame.mockReturnValue(new Game(gameId, ["B"], ["C", "D"], word));

        const updatedGameBoundary = updateGameInteractor.upsertGame(requestingToUpdateGameBoundary);

        expect(updatedGameBoundary).toEqual(expectedGameBoundary);
    });

    test("Throws error if game does not exist", () => {
        const hiddenWord = "####";
        const gameId = 100;

        const requestingToUpdateGameBoundary =
            new BoundaryGame(gameId, ["B"], ["C", "D"], hiddenWord, "T", 3, GameStatus.InProgress);

        GAMES_GW.getGame.mockReturnValue(new Game(0, [], [], ""));
        try {
            updateGameInteractor.upsertGame(requestingToUpdateGameBoundary);
        } catch (error: any) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toContain(gameId.toString());
        }
    });
});