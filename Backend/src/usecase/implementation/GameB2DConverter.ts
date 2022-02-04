import { Game } from "../../domain/Game";
import { BoundaryGame } from "../model/BoundaryGame";

export class GameB2DConverter {
    convert(boundary: BoundaryGame, word: string): Game {
        return new Game(
            boundary.getId(),
            boundary.getGuessedLetters(),
            boundary.getWrongLetters(),
            word
        )
    }
}