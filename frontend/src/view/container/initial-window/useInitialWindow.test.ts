/**
 * @jest-environment jsdom
 */
import {
  Renderer,
  renderHook,
  RenderHookResult,
} from "@testing-library/react-hooks";
import useCreateGame, { CreateGameData } from "./useInitialWindow";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { mock, MockProxy } from "jest-mock-extended";
import { ViewGame } from "../../../controller/model/ViewGame";
import { Observable, of } from "rxjs";
import { act } from "react-dom/test-utils";

describe("useInitialWindow", () => {
  let createGameController: MockProxy<CreateGameController>;
  let hookCreateGame: RenderHookResult<
    unknown,
    CreateGameData,
    Renderer<unknown>
  >;
  const game = new ViewGame(1, [], [], "____", 0, "IN_PROGRESS");
  const observableGame: Observable<ViewGame> = of(game);

  beforeEach(() => {
    createGameController = mock<CreateGameController>();
    createGameController.createNewGame.mockReturnValue(observableGame);
    hookCreateGame = renderHook(() => useCreateGame({ createGameController }));
  });

  test("should not create game on initialization", () => {
    expect(hookCreateGame.result.current.game).toBe(undefined);
  });

  test("should create game using callback", () => {
    const createGame = hookCreateGame.result.current.createGame;
    act(() => {
      createGame();
    });
    expect(createGameController.createNewGame).toBeCalled();
    expect(hookCreateGame.result.current.game).toBe(game);
  });
});
