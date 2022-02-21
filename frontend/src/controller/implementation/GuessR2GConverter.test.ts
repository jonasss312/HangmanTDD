import { GuessR2GConverter } from "./GuessR2GConverter";
import { Guess } from "domain/Guess";
import { GuessRequest } from "controller/model/GuessRequest";

describe("GuessR2GConverter", () => {
  let guessR2GConverter: GuessR2GConverter;

  beforeEach(() => {
    guessR2GConverter = new GuessR2GConverter();
  });

  test("Can transfer attributes", () => {
    const guessRequest = new GuessRequest(1, "T");

    const guess: Guess = guessR2GConverter.convert(guessRequest);

    expect(guess.gameId).toEqual(guessRequest.gameId);
    expect(guess.guessingLetter).toEqual(guessRequest.guessingLetter);
  });
});
