import request from "supertest";
import { Express } from 'express-serve-static-core'
import { CreateGameRoute } from "../rest/implementation/CreateGameRoute";
import { GameB2RConverter } from "../rest/implementation/GameB2RConverter";
import { UpdateR2BConverter } from "../rest/implementation/UpdateR2BConverter";
import { UpsertGameRoute } from "../rest/implementation/UpsertGameRoute";
import { Routes } from "../rest/Routes";
import { Server } from "../rest/Server";
import { CreateGameInteractor } from "../usecase/implementation/CreateGameInteractor";
import { GameD2BConverter } from "../usecase/implementation/GameD2BConverter";
import { UpsertGameInteractor } from "../usecase/implementation/UpsertGameInteractor";
import { FakeGamesGW } from "./FakeGamesGW";
import { FakeWordsGW } from "./FakeWordsGW";
import { BoundaryGame } from "../usecase/model/BoundaryGame";
import { RestGameUpdate } from "../rest/models/RestGameUpdate";

describe("Router", () => {
  let server: Express;

  beforeEach(() => {
    let updateR2BConverter = new UpdateR2BConverter();
    let gameB2RConverter = new GameB2RConverter();
    let gameD2BConverter = new GameD2BConverter();

    let fakeGamesGW = new FakeGamesGW();
    let fakeWordsGW = new FakeWordsGW();

    let createGameInteractor = new CreateGameInteractor(fakeWordsGW, fakeGamesGW, gameD2BConverter);
    let upsertGameInteractor = new UpsertGameInteractor(fakeGamesGW, gameD2BConverter);

    let createGameRoute = new CreateGameRoute(createGameInteractor, gameB2RConverter);
    let upsertGameRoute = new UpsertGameRoute(upsertGameInteractor, gameB2RConverter, updateR2BConverter);

    let serverClass = new Server(true, new Routes(createGameRoute, upsertGameRoute));
    server = serverClass.getServer();
  })

  it("POST create game route API request", async () => {
    const expectedNewGameBoundary = new BoundaryGame(5, [], [], "####", 0, "IN_PROGRESS");

    const result = await request(server).post("/api/games");

    expect(result.body).toEqual(expectedNewGameBoundary);
    expect(result.statusCode).toEqual(201);
  });

  it("PATCH upsert game route API request", async () => {
    const expectedNewGameBoundary = new BoundaryGame(5, ["T"], ["B"], "T##T", 2, "IN_PROGRESS");
    const requestingRestGameUpdate = new RestGameUpdate(5, "T");

    const result = await request(server).patch("/api/games/5").send(requestingRestGameUpdate);
    
    expect(result.body).toEqual(expectedNewGameBoundary);
    expect(result.statusCode).toEqual(200);
  });
});