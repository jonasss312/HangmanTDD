import { GuessRequest } from "controller/model/GuessRequest";
import { Guess } from "domain/Guess";

export class GuessR2GConverter {
  convert(guessRequest: GuessRequest): Guess {
    return new Guess(guessRequest.gameId, guessRequest.guessingLetter);
  }
}
