import { ViewGuess } from "controller/model/ViewGuess";
import { BoundaryGuess } from "usecase/model/BoundaryGuess";

export class GuessV2BConverter {
  convert(guessView: ViewGuess): BoundaryGuess {
    return new BoundaryGuess(guessView.gameId, guessView.guessingLetter);
  }
}
