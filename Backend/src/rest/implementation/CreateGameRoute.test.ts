import { RestGame } from "../models/RestGame";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGame } from '../../usecase/model/BoundaryGame';
import { CreateGameRoute } from './CreateGameRoute';
import { GameB2RConverter } from './GameB2RConverter';
import CreateGameUseCase from '../../usecase/api/CreateGameUseCase';

const MockExpressRequest = require('mock-express-request');
const MockExpressResponse = require('mock-express-response');

const GAME_BOUNDARY = new BoundaryGame(4, ["T"], [], "T##T", 1, "IN_PROGRESS");
const GAME_REST = new RestGame(4, ["T"], [], "T##T", 1, "IN_PROGRESS");

describe("CreateGameRoute", () => {
    let createGameRoute: CreateGameRoute;
    let createGameUC: MockProxy<CreateGameUseCase>;
    let gameConverter: MockProxy<GameB2RConverter>;

    beforeEach(() => {
        createGameUC = mock<CreateGameUseCase>();
        gameConverter = mock<GameB2RConverter>();
        createGameRoute = new CreateGameRoute(createGameUC, gameConverter);
    });

    it("Create game API Request", async () => {
        createGameUC.createGame.mockReturnValue(GAME_BOUNDARY);
        gameConverter.convert.calledWith(GAME_BOUNDARY).mockReturnValue(GAME_REST);

        const request = new MockExpressRequest();
        const response = new MockExpressResponse();

        createGameRoute.createGame(request , response);

        expect(createGameUC.createGame).toBeCalledTimes(1);
        expect(gameConverter.convert).toHaveBeenCalledWith(GAME_BOUNDARY);
        expect(response._getJSON()).toEqual(GAME_REST);
        expect(response.statusCode).toEqual(201);
    });
});
