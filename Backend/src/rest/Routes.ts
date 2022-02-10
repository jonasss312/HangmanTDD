import express, { Request, Response, Router } from "express";

import { CreateGameRoute } from "./implementation/CreateGameRoute";
import { UpsertGameRoute } from "./implementation/UpsertGameRoute";

export class Routes {
    private readonly router: Router;
    private readonly createGameRoute: CreateGameRoute;
    private readonly upsertGameRoute: UpsertGameRoute;

    constructor(createGameRoute: CreateGameRoute, upsertGameRoute: UpsertGameRoute) {
        this.createGameRoute = createGameRoute;
        this.upsertGameRoute = upsertGameRoute;
        this.router = this.configureRouter();
    }

    private configureRouter(): Router {
        let router = express.Router();

        router.post('/', (request: any, response: any) => this.createGameRoute.createGame(request, response));

        router.patch('/:id', (request: Request, response: Response) => this.upsertGameRoute.upsertGame(request, response));

        return router;
    }

    getRouter(): Router {
        return this.router;
    }
}