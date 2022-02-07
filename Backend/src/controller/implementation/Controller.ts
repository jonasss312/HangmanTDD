import CreateGameUseCase from "../../usecase/api/CreateGameUseCase";
import UpdateGameUseCase from "../../usecase/api/UpdateGameUseCase";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { GameDto } from "../models/GameDto";

export class Controller {
    private readonly createGameUseCase: CreateGameUseCase;
    private readonly updateGameUseCase: UpdateGameUseCase;
    constructor(createGameUseCase: CreateGameUseCase, updateGameUseCase: UpdateGameUseCase) {
        this.createGameUseCase = createGameUseCase;
        this.updateGameUseCase = updateGameUseCase;
    }

    createGame(): GameDto{
        const gameBoundary: BoundaryGame = this.createGameUseCase.createGame();
        const game : GameDto = {
            id: gameBoundary.getId(),
            guessedLetters: gameBoundary.getGuessedLetters(),
            wrongLetters: gameBoundary.getWrongLetters(),
            hiddenWord: gameBoundary.getHiddenWord(),
            guesses: gameBoundary.getGuesses(),
            status: gameBoundary.getStatus(),
            guessingLetter: ""
        }
        return game;
    }
}