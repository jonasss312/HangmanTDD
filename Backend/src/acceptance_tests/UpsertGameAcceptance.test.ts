import request from "supertest";
import { Express } from 'express-serve-static-core'
import { RestGameUpdate } from "../rest/models/RestGameUpdate";
import { performSetup } from "./AcceptanceSetup";
import { RestGame } from "../rest/models/RestGame";

describe("UpsertGameAcceptance", () => {
  let server: Express;

  beforeEach(() => {
    server = performSetup();
  })

  it("PATCH upsert game route API request", async () => {
      const gameId = 5;
    const expectedNewGameBoundary = new RestGame(gameId, ["T"], ["B"], "T##T", 2, "IN_PROGRESS");
    const requestingRestGameUpdate = new RestGameUpdate(gameId, "T");

    const result = await request(server).patch("/api/games/5").send(requestingRestGameUpdate);

    expect(result.body).toEqual(expectedNewGameBoundary);
    expect(result.statusCode).toEqual(200);
  });
});