
import express, { Router } from "express";

import CreateGameUseCase from "../usecase/api/CreateGameUseCase";

export class Routes {
    private readonly router: Router;
    private readonly createGameUseCase : CreateGameUseCase; 

    constructor(createGameUseCase : CreateGameUseCase) {
        this.createGameUseCase = createGameUseCase;
        this.router = this.configureRouter();
    }

    private configureRouter(): Router {
        let router = express.Router();

        router.post('/', (request: any, response: any) => {
            const game = this.createGameUseCase.createGame();
            response.status(201).json(game);
        });

        return router;
    }

    getRouter(): Router {
        return this.router;
    }
}