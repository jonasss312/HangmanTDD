import { GuessV2BConverter } from "./GuessV2BConverter";
import { ViewGuessRequest } from "controller/model/ViewGuessRequest";
import { BoundaryGuess } from "usecase/model/BoundaryGuess";

describe("GuessV2BConverter", () => {
  let guessV2BConverter: GuessV2BConverter;

  beforeEach(() => {
    guessV2BConverter = new GuessV2BConverter();
  });

  test("Can transfer attributes", () => {
    const guessRequest = new ViewGuessRequest(1, "T");

    const guessBoundary: BoundaryGuess =
      guessV2BConverter.convert(guessRequest);

    expect(guessBoundary.gameId).toEqual(guessRequest.gameId);
    expect(guessBoundary.guessingLetter).toEqual(guessRequest.guessingLetter);
  });
});
