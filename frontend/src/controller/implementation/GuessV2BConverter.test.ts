import { GuessV2BConverter } from "./GuessV2BConverter";
import { ViewGuess } from "controller/model/ViewGuess";
import { BoundaryGuess } from "usecase/model/BoundaryGuess";

describe("GuessV2BConverter", () => {
  let guessV2BConverter: GuessV2BConverter;

  beforeEach(() => {
    guessV2BConverter = new GuessV2BConverter();
  });

  test("Can transfer attributes", () => {
    const guessView = new ViewGuess(1, "T");

    const guessBoundary: BoundaryGuess = guessV2BConverter.convert(guessView);

    expect(guessBoundary.gameId).toEqual(guessView.gameId);
    expect(guessBoundary.guessingLetter).toEqual(guessView.guessingLetter);
  });
});
