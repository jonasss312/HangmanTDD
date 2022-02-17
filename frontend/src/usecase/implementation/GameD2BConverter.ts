import { Game } from "../../domain/Game";
import { BoundaryGame } from "../model/BoundaryGame";

export class GameD2BConverter {
  convert(game: Game): BoundaryGame {
    return this.createGameBoundary(game);
  }

  private createGameBoundary(game: Game): BoundaryGame {
    return new BoundaryGame(
      game.id,
      game.guessedLetters,
      game.wrongLetters,
      game.hiddenWord,
      game.guesses,
      game.status
    );
  }
}
