import { Game } from "../../domain/Game";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { GameD2BConverter } from "./GameD2BConverter";

describe("GameD2BConverter", () => {
  let gameD2BConverter: GameD2BConverter;

  beforeEach(() => {
    gameD2BConverter = new GameD2BConverter();
  });

  test("Can transfer attributes", () => {
    const game = new Game(1, ["T"], ["A", "C"], "T__T", 3, "IN_PROGRESS");
    const boudaryGame: BoundaryGame = gameD2BConverter.convert(game);

    expect(boudaryGame.getId()).toEqual(game.getId());
    expect(boudaryGame.getGuessedLetters()).toEqual(game.getGuessedLetters());
    expect(boudaryGame.getWrongLetters()).toEqual(game.getWrongLetters());
    expect(boudaryGame.getHiddenWord()).toEqual(game.getHiddenWord());
    expect(boudaryGame.getGuesses()).toEqual(3);
    expect(boudaryGame.getStatus()).toEqual("IN_PROGRESS");
  });
});
