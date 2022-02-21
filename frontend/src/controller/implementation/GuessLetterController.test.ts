import { getObserverTemplate } from "../../constant/getObserverTemplate";
import { ViewGame } from "../model/ViewGame";
import { GameB2VConverter } from "./GameB2VConverter";
import { mock, MockProxy } from "jest-mock-extended";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { of } from "rxjs";
import { GuessLetterController } from "./GuessLetterController";
import { GuessLetterUseCase } from "usecase/api/GuessLetterUseCase";
import { Guess } from "domain/Guess";
import { GuessRequest } from "controller/model/GuessRequest";
import { GuessR2GConverter } from "./GuessR2GConverter";

describe("GuessLetterController", () => {
  let guessLetterController: GuessLetterController;
  let guessLetterUseCase: MockProxy<GuessLetterUseCase>;
  let gameB2VConverter: MockProxy<GameB2VConverter>;
  let guessR2GConverter: MockProxy<GuessR2GConverter>;
  beforeEach(() => {
    guessLetterUseCase = mock<GuessLetterUseCase>();
    gameB2VConverter = mock<GameB2VConverter>();
    guessR2GConverter = mock<GuessR2GConverter>();
    guessLetterController = new GuessLetterController(
      guessLetterUseCase,
      gameB2VConverter,
      guessR2GConverter
    );
  });

  it("Can guess letter", (done) => {
    const guessRequest = new GuessRequest(1, "T");
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

    guessR2GConverter.convert.mockReturnValue(guess);
    guessLetterUseCase.guessLetter.mockReturnValue(of(gameBoundary));
    gameB2VConverter.convert.mockReturnValue(gameView);

    const onNext = (game: ViewGame) => {
      expect(guessR2GConverter.convert).toBeCalledWith(guessRequest);
      expect(guessLetterUseCase.guessLetter).toBeCalledWith(guess);
      expect(gameB2VConverter.convert).toBeCalledWith(gameBoundary);
      expect(game).toStrictEqual(gameView);
    };
    const observer = getObserverTemplate(done, onNext);

    guessLetterController.guessLetter(guessRequest).subscribe(observer);
  });
});
