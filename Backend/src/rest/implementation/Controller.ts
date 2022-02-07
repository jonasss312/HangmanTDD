import CreateGameUseCase from "../../usecase/api/CreateGameUseCase";
import UpdateGameUseCase from "../../usecase/api/UpdateGameUseCase";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { ControllerApi } from "../api/ControllerApi";
import { RestGame } from "../models/RestGame";
import { GameStatus } from "../models/GameStatus";

export class Controller implements ControllerApi {
    private readonly createGameUseCase: CreateGameUseCase;
    private readonly updateGameUseCase: UpdateGameUseCase;
    constructor(createGameUseCase: CreateGameUseCase, updateGameUseCase: UpdateGameUseCase) {
        this.createGameUseCase = createGameUseCase;
        this.updateGameUseCase = updateGameUseCase;
    }

    public async createGame(req: any, res:any): Promise<any> {
        const gameBoundary: BoundaryGame = await this.createGameUseCase.createGame();
        const game : RestGame = {
            id: gameBoundary.getId(),
            guessedLetters: gameBoundary.getGuessedLetters(),
            wrongLetters: gameBoundary.getWrongLetters(),
            hiddenWord: gameBoundary.getHiddenWord(),
            guesses: gameBoundary.getGuesses(),
            status: gameBoundary.getStatus(),
            guessingLetter: ""
        }
        res.status(201).send(game);
    }

    updateGame(game: RestGame): RestGame {
        throw new Error("Method not implemented.");
    }
}