import CreateGameUseCase from "../../usecase/api/CreateGameUseCase";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { RestGame } from "../models/RestGame";
import { GameB2RConverter } from "./GameB2RConverter";
import { Request, Response } from "express";

export class CreateGameRoute {
    private readonly createGameUseCase: CreateGameUseCase;
    private readonly gameB2RConverter : GameB2RConverter;

    constructor(createGameUseCase: CreateGameUseCase, gameB2RConverter : GameB2RConverter) {
        this.createGameUseCase = createGameUseCase;
        this.gameB2RConverter=gameB2RConverter;
    }

    createGame(request: Request, response: Response) {
        const gameBoundary: BoundaryGame = this.createGameUseCase.createGame();
        const updatedGame : RestGame = this.gameB2RConverter.convert(gameBoundary);   
        response.status(201).json(updatedGame);
    }
}