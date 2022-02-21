import { mock, MockProxy } from 'jest-mock-extended';
import { UpsertGameInteractor } from './UpsertGameInteractor'
import { BoundaryGame } from '../model/BoundaryGame';
import { Game } from '../../domain/Game';
import { GameD2BConverter } from './GameD2BConverter';
import { BoundaryUpdate } from '../model/BoundaryUpdate';
import GamesGateway from '../../gateway/api/GamesGateway'

describe("UpdateGameInteractor", () => {
    const UPDATED_HIDDEN_WORD = "T__T";
    const WORD = "TEST";
    const GAME_ID = 100;
    const GUESS_NUMBER = 4;
    const REQUESTING_TO_UPDATE_GAME_BOUNDARY = new BoundaryUpdate(GAME_ID, "J");
    let gamesGW: MockProxy<GamesGateway>;
    let gameD2BConverter: MockProxy<GameD2BConverter>;
    let upsertGameInteractor: UpsertGameInteractor;

    beforeEach(() => {
        gameD2BConverter = mock<GameD2BConverter>();
        gamesGW = mock<GamesGateway>();
        upsertGameInteractor = new UpsertGameInteractor(gamesGW, gameD2BConverter);
    })

    test("Can update existing game", () => {
        const expectedGameBoundary =
            new BoundaryGame(GAME_ID, ["B", "T"], ["C", "D"], UPDATED_HIDDEN_WORD, GUESS_NUMBER + 1, "IN_PROGRESS");
        const game = createGame(["C", "D"]);
        const expectedToConvertGame = createGame(["C", "D", "J"]);

        gamesGW.getGame.mockReturnValue(game);
        gameD2BConverter.convert.mockReturnValue(expectedGameBoundary);

        const updatedGameBoundary = upsertGameInteractor.upsertGame(REQUESTING_TO_UPDATE_GAME_BOUNDARY);

        expect(gameD2BConverter.convert).toBeCalledWith(expectedToConvertGame);
        expect(gamesGW.getGame).toBeCalledWith(GAME_ID);
        expect(updatedGameBoundary).toEqual(expectedGameBoundary);
    });

    test("Throws error if game does not exist", () => {
        try {
            upsertGameInteractor.upsertGame(REQUESTING_TO_UPDATE_GAME_BOUNDARY);
        } catch (error: any) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toContain(GAME_ID.toString());
        }
    });

    test("Throws error if game trying to update ended game", () => {
        const game = createGame(["C", "D", "M", "F", "G", "H", "K", "L", "G", "S"]);

        gamesGW.getGame.mockReturnValue(game);

        try {
            upsertGameInteractor.upsertGame(REQUESTING_TO_UPDATE_GAME_BOUNDARY);
        } catch (error: any) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toContain(GAME_ID.toString());
        }
    });

    function createGame(wrongLetters: string[]): Game {
        return new Game(GAME_ID, ["B", "T"], wrongLetters, WORD);
    }
});