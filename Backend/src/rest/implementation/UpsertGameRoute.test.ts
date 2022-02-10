import { RestGame } from "../models/RestGame";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGame } from '../../usecase/model/BoundaryGame';
import { GameB2RConverter } from './GameB2RConverter';
import { UpsertGameRoute } from "./UpsertGameRoute";
import { BoundaryUpdate } from "../../usecase/model/BoundaryUpdate";
import { UpdateR2BConverter } from "./UpdateR2BConverter";
import UpsertGameUseCase from '../../usecase/api/UpsertGameUseCase';

const MockExpressRequest = require('mock-express-request');
const MockExpressResponse = require('mock-express-response');

const GAME_BOUNDARY = new BoundaryGame(4, ["T"], [], "T##T", 1, "IN_PROGRESS");
const UPDATE_BOUNDARY = new BoundaryUpdate(4, "T");
const GAME_REST = new RestGame(4, ["T"], [], "T##T", 1, "IN_PROGRESS");

describe("UpsertGameRoute", () => {
    let upsertGameRoute: UpsertGameRoute;
    let upsertGameUC: MockProxy<UpsertGameUseCase>;
    let gameConverter: MockProxy<GameB2RConverter>;
    let updateConverter: MockProxy<UpdateR2BConverter>;

    beforeEach(() => {
        upsertGameUC = mock<UpsertGameUseCase>();
        gameConverter = mock<GameB2RConverter>();
        updateConverter = mock<UpdateR2BConverter>();
        upsertGameRoute = new UpsertGameRoute(upsertGameUC, gameConverter, updateConverter);
    });

    it("Patch game API Request", () => {
        const [request,response] = initializeRequestAndResponse();

        upsertGameUC.upsertGame.mockReturnValue(GAME_BOUNDARY);
        gameConverter.convert.calledWith(GAME_BOUNDARY).mockReturnValue(GAME_REST);
        updateConverter.convert.calledWith(request).mockReturnValue(UPDATE_BOUNDARY);

        upsertGameRoute.upsertGame(request, response);

        expect(updateConverter.convert).toBeCalledWith(request);
        expect(upsertGameUC.upsertGame).toBeCalledWith(UPDATE_BOUNDARY);
        expect(gameConverter.convert).toHaveBeenCalledWith(GAME_BOUNDARY);
        expect(response._getJSON()).toEqual(GAME_REST);
        expect(response.statusCode).toEqual(200);
    });

    it("Throw error if game does not exist API Request", () => {
        const [request,response] = initializeRequestAndResponse();

        upsertGameUC.upsertGame.mockImplementation(() => { throw new Error('No such game id: 4'); });
        updateConverter.convert.calledWith(request).mockReturnValue(UPDATE_BOUNDARY);

        upsertGameRoute.upsertGame(request, response);

        expect(updateConverter.convert).toBeCalledWith(request);
        expect(upsertGameUC.upsertGame).toBeCalledWith(UPDATE_BOUNDARY);
        expect(response.statusCode).toEqual(404);
        expect(response._getJSON()).toEqual('No such game id: 4');
    });

    function initializeRequestAndResponse() : [typeof MockExpressRequest, typeof MockExpressResponse] {
        const request = new MockExpressRequest({ body: { id: 4, guessingLetter: "T" } });
        const response = new MockExpressResponse();
        return [request,response];
    }
});