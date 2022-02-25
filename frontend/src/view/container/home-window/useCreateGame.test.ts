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
import * as useControllerContext from "../game-window/useControllerContext";
import { act } from "react-dom/test-utils";

describe("useCreateGame", () => {
  let hookCreateGame: any;
  let setGame: (game: ViewGame | undefined) => void;
  const VIEW_GAME = mock<ViewGame>();

  beforeEach(() => {
    setGame = jest.fn();
  });

  test("Can set new game data with callback", () => {
    const controller = mockController();
    controller.createNewGame.mockReturnValue(from([VIEW_GAME]));

    hookCreateGame = renderHook(() => useCreateGame(setGame));

    const createGameCallBack = hookCreateGame.result.current;

    act(() => {
      createGameCallBack();
    });

    expect(setGame).toBeCalled();
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
