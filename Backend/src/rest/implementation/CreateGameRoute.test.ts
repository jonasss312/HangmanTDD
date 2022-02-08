import { mock, MockProxy } from "jest-mock-extended";
import CreateGameUseCase from "../../usecase/api/CreateGameUseCase";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { CreateGameRoute } from "./CreateGameRoute";

const CREATE_GAME_USE_CASE: MockProxy<CreateGameUseCase> = mock<CreateGameUseCase>();
const CREATE_GAME_ROUTE = new CreateGameRoute(CREATE_GAME_USE_CASE);

const { mockRequest, mockResponse } = require('util/interceptor')

import request from 'supertest'
import {Express} from 'express-serve-static-core'

import {createServer} from '../Server'

let server: Express

beforeAll(async () => {
  server = await createServer()
})

describe("CreateGameRoute", () => {
    test("Can create game", () => {
        let gameId = 1;
        // reikia issiakiskinti kaip tikrinti
        const gameBoundary= new BoundaryGame(1,[],[],"TEST","",0,"IN_PROGRESS");

        CREATE_GAME_USE_CASE.createGame.mockReturnValue(gameBoundary);

        let result = CREATE_GAME_ROUTE.createGame({}, {});
        console.log(result);
    });

    test('should 200 and return correct value', async () => {
        let req = mockRequest();
        req.params.id = 1;
        const res = mockResponse();
    
        const gameBoundary= new BoundaryGame(1,[],[],"TEST","",0,"IN_PROGRESS");
        CREATE_GAME_USE_CASE.createGame.mockReturnValue(gameBoundary);

        await CREATE_GAME_ROUTE.createGame(req, res);
    
        expect(res.send).toHaveBeenCalledTimes(1)
        expect(res.send.mock.calls.length).toBe(1);
        expect(res.send).toHaveBeenCalledWith(gameBoundary);
      });
    
      it('should return 200 & valid response if request param list is empity', done => {
        const gameBoundary= new BoundaryGame(1,[],[],"TEST","",0,"IN_PROGRESS");
        CREATE_GAME_USE_CASE.createGame.mockReturnValue(gameBoundary);

        request(server)
          .post(`/api/games`)
          .expect('Content-Type', /json/)
          .expect(201)
          .end((err, res) => {
            if (err) return done(err)
            expect(res.body).toMatchObject(gameBoundary)
            done()
          })
        });
});
