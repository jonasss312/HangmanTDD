/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react-hooks";
import useCreateGame from "./useCreateGame";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { mock } from "jest-mock-extended";
import { ViewGame } from "../../../controller/model/ViewGame";
import { from } from "rxjs";
import { Controllers } from "../context/ControllerContext";
import * as useControllerContext from "../context/useControllerContext";
import { act } from "react-dom/test-utils";
import * as Snackbar from "notistack";
import * as useCeateObserver from "../observer/useCreateObserver";
import { getObserverTemplate } from "constant/getObserverTemplate";

describe("useCreateGame", () => {
  let hookCreateGame: any;
  let setGame: (game: ViewGame | undefined) => void;
  const VIEW_GAME = mock<ViewGame>();

  beforeEach(() => {
    setGame = jest.fn();
    jest.spyOn(Snackbar, "useSnackbar").mockReturnValue(mock<any>());
  });

  test("Can set new game data with callback", (done) => {
    const controller = mockController();
    controller.createNewGame.mockReturnValue(from([VIEW_GAME]));

    jest
      .spyOn(useCeateObserver, "default")
      .mockReturnValue(
        getObserverTemplate(done, (value: any) => setGame(value))
      );

    hookCreateGame = renderHook(() => useCreateGame(setGame));
    const createGameCallBack = hookCreateGame.result.current;

    act(() => {
      createGameCallBack();
    });

    expect(setGame).toBeCalledWith(VIEW_GAME);
  });

  function mockController() {
    const controller = mock<CreateGameController>();
    const controllers: Controllers = mock<Controllers>({
      createGameController: controller,
    });
    jest.spyOn(useControllerContext, "default").mockReturnValue(controllers);
    return controller;
  }
});
