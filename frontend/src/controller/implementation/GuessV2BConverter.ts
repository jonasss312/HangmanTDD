import { ViewGuessRequest } from "controller/model/ViewGuessRequest";
import { BoundaryGuess } from "usecase/model/BoundaryGuess";

export class GuessV2BConverter {
  convert(guessRequest: ViewGuessRequest): BoundaryGuess {
    return new BoundaryGuess(guessRequest.gameId, guessRequest.guessingLetter);
  }
}
