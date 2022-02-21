import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { ViewGame } from "../model/ViewGame";

export class GameB2VConverter {
  convert(boudaryGame: BoundaryGame): ViewGame {
    return this.createGameView(boudaryGame);
  }

  private createGameView(game: BoundaryGame): ViewGame {
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
