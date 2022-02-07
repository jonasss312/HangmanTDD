import { mock, MockProxy } from 'jest-mock-extended';

import { UpdateGameInteractor } from './UpdateGameInteractor'

import { BoundaryGame } from '../model/BoundaryGame';
import { Game } from '../../domain/Game';

import GamesGateway from '../../gateway/api/GamesGateway'

const GAMES_GW: MockProxy<GamesGateway> = mock<GamesGateway>();

let updateGameInteractor: UpdateGameInteractor;

beforeEach(() => {
    updateGameInteractor = new UpdateGameInteractor(GAMES_GW);
})

describe("UpdateGameInteractor", () => {
    /*test("Can update game", () => {
        const updatedHiddenWord = "T##T";
        const hiddenWord = "####";
        const word = "TEST";
        const gameId = 1;

        const requestingToUpdateGameBoundary = new BoundaryGame(gameId, ["T", "B"], ["C", "D"], hiddenWord);
        const expectedGameBoundary = new BoundaryGame(gameId, ["T", "B"], ["C", "D"], updatedHiddenWord)

        GAMES_GW.getGame
            .mockReturnValue(new Game(gameId, [], [], word))
            .mockReturnValue(new Game(gameId, ["T", "B"], ["C", "D"], word));

        const updatedGameBoundary = updateGameInteractor.updateGame(requestingToUpdateGameBoundary);

        expect(updatedGameBoundary).toEqual(expectedGameBoundary);
    });*/

    test("Can update game", () => {
        const word = "TEST";
        const gameId = 1;

        const requestingToUpdateGame = new Game(gameId, ["T", "B"], ["C", "D"], word);
        const expectedGame = new Game(gameId, ["T", "B"], ["C", "D"], word)

        GAMES_GW.getGame
            .mockReturnValue(expectedGame);

        const updatedGame = updateGameInteractor.updateGame(requestingToUpdateGame);

        expect(updatedGame).toEqual(expectedGame);
    });
});