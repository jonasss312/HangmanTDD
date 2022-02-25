/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react-hooks";
import useLetter from "./useLetter";
import { ViewGame } from "../../../controller/model/ViewGame";
import { ViewGuess } from "controller/model/ViewGuess";
import * as useControllerContext from "./useControllerContext";
import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { mock } from "jest-mock-extended";
import { Controllers } from "../context/ControllerContext";
import { from, of } from "rxjs";
import { act } from "react-dom/test-utils";

describe("useLetter", () => {
  let hookUseLetter: any;
  let setGame: (game: ViewGame | undefined) => void;
  const VIEW_GUESS: ViewGuess = new ViewGuess(1, "T");
  const VIEW_GAME: ViewGame = mock<ViewGame>();

  beforeEach(() => {
    setGame = jest.fn();
  });

  test("Can set updated game data with callback", () => {
    const controller = mockController();
    controller.guessLetter.mockReturnValue(from([VIEW_GAME]));

    hookUseLetter = renderHook(() => useLetter(setGame));

    const guessLetterCallBack = hookUseLetter.result.current;

    act(() => {
      guessLetterCallBack(VIEW_GUESS);
    });

    expect(setGame).toBeCalledWith(VIEW_GAME);
  });

  function mockController() {
    const controller = mock<GuessLetterController>();
    const controllers: Controllers = mock<Controllers>({
      guessLetterController: controller,
    });
    jest.spyOn(useControllerContext, "default").mockReturnValue(controllers);
    return controller;
  }
});
