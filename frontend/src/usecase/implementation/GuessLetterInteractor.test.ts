import { Game } from "../../domain/Game";
import { GamesGateway } from "../../gateway/api/GamesGateway";
import { mock, MockProxy } from "jest-mock-extended";
import { of } from "rxjs";
import { BoundaryGame } from "../model/BoundaryGame";
import { GameD2BConverter } from "./GameD2BConverter";
import { getObserverTemplate } from "../../constant/getObserverTemplate";
import { GuessLetterInteractor } from "./GuessLetterInteractor";
import { Guess } from "domain/Guess";

describe("GuessLetterInteractor", () => {
  let guessLetterInteractor: GuessLetterInteractor;
  let gamesGW: MockProxy<GamesGateway>;
  let gameD2BConverter: MockProxy<GameD2BConverter>;

  beforeEach(() => {
    gamesGW = mock<GamesGateway>();
    gameD2BConverter = mock<GameD2BConverter>();
    guessLetterInteractor = new GuessLetterInteractor(
      gamesGW,
      gameD2BConverter
    );
  });

  it("Can guess letter", (done) => {
    const [guess, updatedGame, updatedGameBoundary] = setup();

    gamesGW.guessLetter.mockReturnValue(of(updatedGame));
    gameD2BConverter.convert.mockReturnValue(updatedGameBoundary);

    const onNext = (game: BoundaryGame) => {
      expect(game).toStrictEqual(updatedGameBoundary);
      expect(gamesGW.guessLetter).toBeCalledWith(guess);
      expect(gameD2BConverter.convert).toBeCalledWith(updatedGame);
    };
    const observer = getObserverTemplate(done, onNext);

    guessLetterInteractor.guessLetter(guess).subscribe(observer);
  });

  function setup(): [Guess, Game, BoundaryGame] {
    const guess = new Guess(1, "T");
    const updatedGame = new Game(1, ["T"], [], "T__T", 0, "IN_PROGRESS");
    const updatedGameBoundary = new BoundaryGame(
      1,
      ["T"],
      [],
      "____",
      0,
      "IN_PROGRESS"
    );

    return [guess, updatedGame, updatedGameBoundary];
  }
});
