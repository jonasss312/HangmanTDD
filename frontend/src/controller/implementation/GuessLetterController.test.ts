import { getObserverTemplate } from "../../constant/getObserverTemplate";
import { ViewGame } from "../model/ViewGame";
import { GameB2VConverter } from "./GameB2VConverter";
import { mock, MockProxy } from "jest-mock-extended";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { of } from "rxjs";
import { GuessLetterController } from "./GuessLetterController";
import { GuessLetterUseCase } from "usecase/api/GuessLetterUseCase";
import { Guess } from "domain/Guess";
import { ViewGuessRequest } from "controller/model/ViewGuessRequest";
import { GuessV2BConverter } from "./GuessV2BConverter";

describe("GuessLetterController", () => {
  let guessLetterController: GuessLetterController;
  let guessLetterUseCase: MockProxy<GuessLetterUseCase>;
  let gameB2VConverter: MockProxy<GameB2VConverter>;
  let guessV2BConverter: MockProxy<GuessV2BConverter>;
  beforeEach(() => {
    guessLetterUseCase = mock<GuessLetterUseCase>();
    gameB2VConverter = mock<GameB2VConverter>();
    guessV2BConverter = mock<GuessV2BConverter>();
    guessLetterController = new GuessLetterController(
      guessLetterUseCase,
      gameB2VConverter,
      guessV2BConverter
    );
  });

  it("Can guess letter", (done) => {
    const [guessRequest, guess, gameView, gameBoundary] = setup();

    const onNext = (game: ViewGame) => {
      expect(game).toStrictEqual(gameView);
    };
    const observer = getObserverTemplate(done, onNext);

    guessLetterController.guessLetter(guessRequest).subscribe(observer);
  });

  function setup(): [ViewGuessRequest, Guess, ViewGame, BoundaryGame] {
    const guessRequest = new ViewGuessRequest(1, "T");
    const guess = new Guess(1, "T");
    const gameView = new ViewGame(1, [], [], "____", 0, "IN_PROGRESS");
    const gameBoundary = new BoundaryGame(
      1,
      ["T"],
      [],
      "T__T",
      0,
      "IN_PROGRESS"
    );

    guessV2BConverter.convert.mockReturnValue(guess);
    guessLetterUseCase.guessLetter.mockReturnValue(of(gameBoundary));
    gameB2VConverter.convert.mockReturnValue(gameView);

    return [guessRequest, guess, gameView, gameBoundary];
  }
});
