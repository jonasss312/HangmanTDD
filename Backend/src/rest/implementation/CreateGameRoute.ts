import CreateGameUseCase from "../../usecase/api/CreateGameUseCase";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { RestGame } from "../models/RestGame";

export class CreateGameRoute {
    private readonly createGameUseCase: CreateGameUseCase;
    constructor(createGameUseCase: CreateGameUseCase) {
        this.createGameUseCase = createGameUseCase;
    }

    public createGame(req: any, res:any) : void {
        const gameBoundary: BoundaryGame = this.createGameUseCase.createGame();
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
}