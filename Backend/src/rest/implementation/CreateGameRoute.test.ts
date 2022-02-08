import request from 'supertest'
import { Express } from 'express-serve-static-core'

import { Server } from '../Server'
import { RestGame } from "../models/RestGame";
import { Routes } from '../Routes'
import CreateGameUseCase from '../../usecase/api/CreateGameUseCase'

import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGame } from '../../usecase/model/BoundaryGame';


const CREATE_GAME_USE_CASE: MockProxy<CreateGameUseCase> = mock<CreateGameUseCase>();
const GAME_BOUNDARY = new BoundaryGame(4, [], [], "####", "", 0, "IN_PROGRESS");

let server: Express

beforeAll(() => {
    CREATE_GAME_USE_CASE.createGame.mockReturnValue(GAME_BOUNDARY);
    const router = new Routes(CREATE_GAME_USE_CASE)
    server = new Server(true, router).getServer();
})

describe("CreateGameRoute", () => {
    it("Create game API Request", async () => {
        const result = await request(server).post("/api/games");
        const newGame: RestGame = result.body;
        expect(result.type).toEqual("application/json");
        expect(result.statusCode).toEqual(201);
        expect(newGame.id).toEqual(4);
        expect(newGame.hiddenWord).not.toEqual("");
        expect(newGame.guesses).toEqual(0);
        expect(newGame.status).toEqual("IN_PROGRESS");
    });
});
