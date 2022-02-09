import { RestGame } from "../models/RestGame";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";

export class GameB2RConverter {
    convert(boundary: BoundaryGame): RestGame {
        return this.createRestGame(boundary);
    }

    private createRestGame(gameBoundary: BoundaryGame): RestGame {
        return new RestGame(
            gameBoundary.getId(),
            gameBoundary.getGuessedLetters(),
            gameBoundary.getWrongLetters(),
            gameBoundary.getHiddenWord(),
            gameBoundary.getGuesses(),
            gameBoundary.getStatus()
        )
    }
}