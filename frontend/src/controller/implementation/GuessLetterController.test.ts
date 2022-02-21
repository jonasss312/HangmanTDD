import { getObserverTemplate } from "../../constant/getObserverTemplate";
import { ViewGame } from "../model/ViewGame";
import { GameB2VConverter } from "./GameB2VConverter";
import { mock, MockProxy } from "jest-mock-extended";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { of } from "rxjs";
import { GuessLetterController } from "./GuessLetterController";
import { GuessLetterUseCase } from "usecase/api/GuessLetterUseCase";
import { Guess } from "domain/Guess";
import { ViewGuess } from "controller/model/ViewGuess";
import { GuessV2BConverter } from "./GuessV2BConverter";

describe("GuessLetterController", () => {
  const GUESS_VIEW = new ViewGuess(1, "T");
  const GUESS = new Guess(1, "T");
  const GAME_VIEW = new ViewGame(1, [], [], "____", 0, "IN_PROGRESS");
  const GAME_BOUNDARY = new BoundaryGame(
    1,
    ["T"],
    [],
    "T__T",
    0,
    "IN_PROGRESS"
  );
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
    setup();

    const onNext = (game: ViewGame) => {
      expect(game).toStrictEqual(GAME_VIEW);
    };
    const observer = getObserverTemplate(done, onNext);

    guessLetterController.guessLetter(GUESS_VIEW).subscribe(observer);
  });

  function setup() {
    guessV2BConverter.convert.mockReturnValue(GUESS);
    guessLetterUseCase.guessLetter.mockReturnValue(of(GAME_BOUNDARY));
    gameB2VConverter.convert.mockReturnValue(GAME_VIEW);
  }
});
