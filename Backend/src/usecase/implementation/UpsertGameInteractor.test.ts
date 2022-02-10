import { mock, MockProxy } from 'jest-mock-extended';

import { UpsertGameInteractor } from './UpsertGameInteractor'
import { BoundaryGame } from '../model/BoundaryGame';
import { Game } from '../../domain/Game';
import { GameD2BConverter } from './GameD2BConverter';
import { BoundaryUpdate } from '../model/BoundaryUpdate';
import GamesGateway from '../../gateway/api/GamesGateway'

describe("UpdateGameInteractor", () => {
    let gamesGW: MockProxy<GamesGateway>;
    let gameD2BConverter: MockProxy<GameD2BConverter>;
    let upsertGameInteractor: UpsertGameInteractor;

    beforeEach(() => {
        gameD2BConverter = mock<GameD2BConverter>();
        gamesGW = mock<GamesGateway>();
        upsertGameInteractor = new UpsertGameInteractor(gamesGW, gameD2BConverter);
    })

    test("Can update existing game", () => {
        const updatedHiddenWord = "T##T";
        const word = "TEST";
        const gameId = 100;
        const guessNumber = 4;

        const requestingToUpdateBoundary = new BoundaryUpdate(gameId, "T");
        const expectedGameBoundary = new BoundaryGame(gameId, ["B", "T"], ["C", "D"], updatedHiddenWord, guessNumber, "IN_PROGRESS");
        const game = new Game(gameId, ["B", "T"], ["C", "D"], word);

        gamesGW.getGame.mockReturnValue(new Game(gameId, ["B", "T"], ["C", "D"], word));
        gameD2BConverter.convert.mockReturnValue(expectedGameBoundary);

        const updatedGameBoundary = upsertGameInteractor.upsertGame(requestingToUpdateBoundary);
        expect(gameD2BConverter.convert).toBeCalledWith(game);
        expect(gamesGW.getGame).toBeCalledWith(gameId);
        expect(updatedGameBoundary).toEqual(expectedGameBoundary);
    });

    test("Throws error if game does not exist", () => {
        const gameId = 100;

        const requestingToUpdateGameBoundary =
            new BoundaryUpdate(gameId, "T");

        gamesGW.getGame.mockReturnValue(new Game(0, [], [], ""));
        try {
            upsertGameInteractor.upsertGame(requestingToUpdateGameBoundary);
        } catch (error: any) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toContain(gameId.toString());
        }
    });
});