import request from "supertest";
import { Express } from 'express-serve-static-core'
import { performSetup } from "./AcceptanceSetup";
import { RestGame } from "../rest/models/RestGame";

describe("CreateGameAcceptance", () => {
    let server: Express;

    beforeEach(() => {
        server = performSetup();
    })

    it("POST create game route API request", async () => {
        const expectedNewGame = new RestGame(5, [], [], "____", 0, "IN_PROGRESS");

        const result = await request(server).post("/api/games");

        expect(result.body).toEqual(expectedNewGame);
        expect(result.statusCode).toEqual(201);
    });
});