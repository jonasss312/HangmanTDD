import { mock, MockProxy } from "jest-mock-extended";
import CreateGameUseCase from "../../usecase/api/CreateGameUseCase";
import { CreateGameRoute } from "./CreateGameRoute";

const CREATE_GAME_INTERACTOR: MockProxy<CreateGameUseCase> = mock<CreateGameUseCase>();
const CREATE_GAME_ROUTE = new CreateGameRoute(CREATE_GAME_INTERACTOR);

describe("CreateRoute", () => {
    test("Can create game", () => {
        let gameId = 1;
        // reikia issiakiskinti kaip tikrinti
        

        let result = CREATE_GAME_ROUTE.createGame({},{});
        console.log(result)
    });
});
