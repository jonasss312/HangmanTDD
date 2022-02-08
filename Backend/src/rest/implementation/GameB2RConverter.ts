import { RestGame } from "../models/RestGame";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";

export class GameB2RConverter {
    convert(boundary: BoundaryGame): RestGame {
        return this.createRestGame(boundary);
    }

    private createRestGame(gameBoundary: BoundaryGame): RestGame {
        const game: RestGame = {
            id: gameBoundary.getId(),
            guessedLetters: gameBoundary.getGuessedLetters(),
            wrongLetters: gameBoundary.getWrongLetters(),
            hiddenWord: gameBoundary.getHiddenWord(),
            guesses: gameBoundary.getGuesses(),
            status: gameBoundary.getStatus()
        }
        return game;
    }
}