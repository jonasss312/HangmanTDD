/**
 * @jest-environment jsdom
 */
import {
  Renderer,
  renderHook,
  RenderHookResult,
} from "@testing-library/react-hooks";
import useCreateGame from "./useCreateGame";
import { CreateGameController } from "./../controller/implementation/CreateGameController";
import { mock, MockProxy } from "jest-mock-extended";
import { ViewGame } from "../controller/model/ViewGame";
import { Observable, of } from "rxjs";

describe("GameD2BConverter", () => {
  let createGameController: MockProxy<CreateGameController>;
  let hookCreateGame: RenderHookResult<
    unknown,
    ViewGame | undefined,
    Renderer<unknown>
  >;

  beforeEach(() => {});

  test("should create game", () => {
    const game = new ViewGame(1, [], [], "____", 0, "IN_PROGRESS");
    const observableGame: Observable<ViewGame> = of(game);

    createGameController = mock<CreateGameController>();
    createGameController.createNewGame.mockReturnValue(observableGame);
    hookCreateGame = renderHook(() => useCreateGame(createGameController));

    expect(hookCreateGame.result.current).toBe(game);
    expect(createGameController.createNewGame).toBeCalled();
  });
});
