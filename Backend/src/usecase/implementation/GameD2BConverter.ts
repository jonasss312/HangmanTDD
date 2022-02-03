import { Game } from "../../domain/Game";
import { BoundaryGame } from "../model/BoundaryGame";

export class GameD2BConverter {
    convert(game: Game): BoundaryGame {
        return new BoundaryGame(
            game.getId(),
            game.getGuessedLetters(),
            game.getWrongLetters(),
            game.getHiddenWord()
        )
    }
}