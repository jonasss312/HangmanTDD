/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react-hooks";
import useLetter from "./useLetter";
import { mock, MockProxy } from "jest-mock-extended";
import { ViewGame } from "../../../controller/model/ViewGame";
import { Observable, of } from "rxjs";
import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { ViewGuess } from "controller/model/ViewGuess";

describe("useLetter", () => {
  let guessLetterController: MockProxy<GuessLetterController>;
  let hookUseLetter: any;
  let setGame: (game: ViewGame | undefined) => void;
  const GAME = new ViewGame(1, ["T"], [], "T__T", 0, "IN_PROGRESS");
  const OBSERVABLE_GAME: Observable<ViewGame> = of(GAME);
  const VIEW_GUESS: ViewGuess = new ViewGuess(1, "T");

  beforeEach(() => {
    guessLetterController = mock<GuessLetterController>();
    setGame = jest.fn();
    guessLetterController.guessLetter.mockReturnValue(OBSERVABLE_GAME);
    hookUseLetter = renderHook(() =>
      useLetter(VIEW_GUESS, guessLetterController, setGame)
    );
  });

  test("Can set new game data with callback", () => {
    const guessLetterCallBack = hookUseLetter.result.current;

    guessLetterCallBack();

    expect(setGame).toBeCalled();
  });
});
