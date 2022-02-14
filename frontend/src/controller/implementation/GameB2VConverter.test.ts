import { ViewGame } from "../model/ViewGame";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { GameB2VConverter } from "./GameB2VConverter";

describe("GameB2VConverter", () => {
  let gameB2VConverter: GameB2VConverter;

  beforeEach(() => {
    gameB2VConverter = new GameB2VConverter();
  });

  test("Can transfer attributes", () => {
    const boudaryGame = new BoundaryGame(
      1,
      ["T"],
      ["A", "C"],
      "T__T",
      3,
      "IN_PROGRESS"
    );

    const gameView: ViewGame = gameB2VConverter.convert(boudaryGame);

    expect(gameView.getId()).toEqual(boudaryGame.getId());
    expect(gameView.getGuessedLetters()).toEqual(
      boudaryGame.getGuessedLetters()
    );
    expect(gameView.getWrongLetters()).toEqual(boudaryGame.getWrongLetters());
    expect(gameView.getHiddenWord()).toEqual(boudaryGame.getHiddenWord());
    expect(gameView.getGuesses()).toEqual(boudaryGame.getGuesses());
    expect(gameView.getStatus()).toEqual(boudaryGame.getStatus());
  });
});
