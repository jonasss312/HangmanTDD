
import express, { Router } from "express";

import { CreateGameRoute } from "./implementation/CreateGameRoute";

export class Routes {
    private readonly router: Router;
    private readonly createGameRoute : CreateGameRoute; 

    constructor(createGameRoute : CreateGameRoute) {
        this.createGameRoute = createGameRoute;
        this.router = this.configureRouter();
    }

    private configureRouter(): Router {
        let router = express.Router();

        router.post('/', (request: any, response: any) => {
            const game = this.createGameRoute.createGame();
            response.status(201).json(game);
        });

        return router;
    }

    getRouter(): Router {
        return this.router;
    }
}