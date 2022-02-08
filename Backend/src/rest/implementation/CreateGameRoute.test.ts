import { mock, MockProxy } from "jest-mock-extended";
import CreateGameUseCase from "../../usecase/api/CreateGameUseCase";
import { CreateGameRoute } from "./CreateGameRoute";

const CREATE_GAME_USE_CASE: MockProxy<CreateGameUseCase> = mock<CreateGameUseCase>();
const CREATE_GAME_ROUTE = new CreateGameRoute(CREATE_GAME_USE_CASE);

import request from 'supertest'
import { Express } from 'express-serve-static-core'

import { createServer } from '../Server'
import { RestGame } from "../models/RestGame";

let server: Express

beforeAll(async () => {
    server = await createServer()
})

describe("CreateGameRoute", () => {
    it("Hello API Request", async () => {
        const result = await request(server).get("/api/games");
        expect(result.text).toEqual("Hello");
        expect(result.statusCode).toEqual(200);
    });

    it("Create game API Request", async () => {
        const result = await request(server).post("/api/games");
        const newGame : RestGame = result.body;
        expect(result.type).toEqual("application/json");
        expect(result.statusCode).toEqual(201);
        expect(newGame.id).toBeGreaterThan(0);
        expect(newGame.hiddenWord).not.toEqual("");
        expect(newGame.guesses).toEqual(0);
        expect(newGame.status).toEqual("IN_PROGRESS");
    });
});
