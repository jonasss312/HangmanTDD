import UpsertGameUseCase from "../../usecase/api/UpsertGameUseCase";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { RestGame } from "../models/RestGame";
import { GameB2RConverter } from "./GameB2RConverter";
import { Request, Response } from "express";
import { BoundaryUpdate } from "../../usecase/model/BoundaryUpdate";
import { UpdateR2BConverter } from "./UpdateR2BConverter";

export class UpsertGameRoute {
    private readonly upsertGameUseCase: UpsertGameUseCase;
    private readonly gameB2RConverter: GameB2RConverter;
    private readonly updateR2BConverter: UpdateR2BConverter;

    constructor(upsertGameUseCase: UpsertGameUseCase, gameB2RConverter: GameB2RConverter,
        updateR2BConverter: UpdateR2BConverter) {
        this.upsertGameUseCase = upsertGameUseCase;
        this.gameB2RConverter = gameB2RConverter;
        this.updateR2BConverter = updateR2BConverter;
    }

    upsertGame(request: Request, response: Response) {
        const gameUpdateBoundary: BoundaryUpdate = this.updateR2BConverter.convert(request);
        try {
            const updatedGameBoundary: BoundaryGame = this.upsertGameUseCase.upsertGame(gameUpdateBoundary);
            const updatedRestModel: RestGame = this.gameB2RConverter.convert(updatedGameBoundary);
            response.status(200).json(updatedRestModel);
        } catch (error) {
            const errorMessage = (error as Error).message;
            if (errorMessage.includes("ended"))
                return response.status(403).json((error as Error).message);
            response.status(404).json((error as Error).message);
        }
    }
}