import { Game } from "../../domain/Game";
import { BoundaryGame } from "../model/BoundaryGame";

export class GameD2BConverter {
    convertGameToBoundary(game: Game): BoundaryGame {
        return new BoundaryGame(
            game.getId(),
            game.getGuessedLetters(),
            game.getWrongLetters(),
            game.getHiddenWord()
        )
    }

    convertBoundaryToGame(boundary: BoundaryGame, word: string): Game {
        return new Game(
            boundary.getId(),
            boundary.getGuessedLetters(),
            boundary.getWrongLetters(),
            word
        )
    }
}