import { CreateGameRoute } from "../rest/implementation/CreateGameRoute";
import { GameB2RConverter } from "../rest/implementation/GameB2RConverter";
import { UpdateR2BConverter } from "../rest/implementation/UpdateR2BConverter";
import { UpsertGameRoute } from "../rest/implementation/UpsertGameRoute";
import { Routes } from "../rest/Routes";
import { Server } from "../rest/Server";
import { CreateGameInteractor } from "../usecase/implementation/CreateGameInteractor";
import { GameD2BConverter } from "../usecase/implementation/GameD2BConverter";
import { UpsertGameInteractor } from "../usecase/implementation/UpsertGameInteractor";
import { FakeGamesGW } from "../gateway/fake/FakeGamesGW";
import { FakeWordsGW } from "../gateway/fake/FakeWordsGW";

export const performSetup = () => {
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
    return serverClass.getServer();
}