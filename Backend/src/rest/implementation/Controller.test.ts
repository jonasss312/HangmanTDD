import { mock, MockProxy } from "jest-mock-extended";
import { GameStatus } from "../../domain/GameStatus";
import CreateGameUseCase from "../../usecase/api/CreateGameUseCase";
import UpdateGameUseCase from "../../usecase/api/UpdateGameUseCase";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { RestGame } from "../models/RestGame";
import { Controller } from "./Controller"

const CREATE_GAME_INTERACTOR: MockProxy<CreateGameUseCase> = mock<CreateGameUseCase>();
const UPDATE_GAME_INTERACTOR: MockProxy<UpdateGameUseCase> = mock<UpdateGameUseCase>();

let controller: Controller;

beforeEach(() => {
    controller = new Controller(CREATE_GAME_INTERACTOR, UPDATE_GAME_INTERACTOR);
})


describe("Controller", () => {
    test("Can create game", () => {
        let gameId = 1;

        CREATE_GAME_INTERACTOR.createGame.mockReturnValue(new BoundaryGame(gameId, [],[],"####", "", 0, GameStatus.InProgress));

        const result = controller.createGame({},{});
        console.log(result)
        //expect(result.id).toBeGreaterThan(0);
    });
});
