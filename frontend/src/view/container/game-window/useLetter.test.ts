/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react-hooks";
import useLetter from "./useLetter";
import { ViewGame } from "../../../controller/model/ViewGame";
import { ViewGuess } from "controller/model/ViewGuess";
import * as useControllerContext from "../context/useControllerContext";
import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { mock } from "jest-mock-extended";
import { Controllers } from "../context/ControllerContext";
import { from } from "rxjs";
import { act } from "react-dom/test-utils";
import * as useCeateObserver from "../observer/useCreateObserver";
import * as Snackbar from "notistack";
import { getObserverTemplate } from "constant/getObserverTemplate";

describe("useLetter", () => {
  let hookUseLetter: any;
  let setGame: (game: ViewGame | undefined) => void;
  const VIEW_GUESS: ViewGuess = new ViewGuess(1, "T");
  const VIEW_GAME: ViewGame = mock<ViewGame>();

  beforeEach(() => {
    setGame = jest.fn();
    jest.spyOn(Snackbar, "useSnackbar").mockReturnValue(mock<any>());
  });

  test("Can use observable with callback", (done) => {
    const observable = from([VIEW_GAME]);
    const controller = mockController();
    controller.guessLetter.mockReturnValue(observable);

    jest
      .spyOn(useCeateObserver, "default")
      .mockReturnValue(
        getObserverTemplate(done, (value: any) => setGame(value))
      );

    hookUseLetter = renderHook(() => useLetter(setGame));
    const callBack = hookUseLetter.result.current;

    act(() => {
      callBack(VIEW_GUESS);
    });

    expect.assertions(1);
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
