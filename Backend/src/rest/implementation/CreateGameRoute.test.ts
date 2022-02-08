import request from 'supertest'
import { Express } from 'express-serve-static-core'

import { createServer } from '../Server'
import { RestGame } from "../models/RestGame";

let server: Express

beforeAll(async () => {
    server = await createServer()
})

describe("CreateGameRoute", () => {
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
