import CreateGameUseCase from "../../usecase/api/CreateGameUseCase";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { RestGame } from "../models/RestGame";
import { GameB2RConverter } from "./GameB2RConverter";

export class CreateGameRoute {
    private readonly createGameUseCase: CreateGameUseCase;
    private readonly gameB2RConverter : GameB2RConverter;

    constructor(createGameUseCase: CreateGameUseCase, gameB2RConverter : GameB2RConverter) {
        this.createGameUseCase = createGameUseCase;
        this.gameB2RConverter=gameB2RConverter;
    }

    createGame() : RestGame {
        const gameBoundary: BoundaryGame = this.createGameUseCase.createGame();
        return this.gameB2RConverter.convert(gameBoundary);
    }
}