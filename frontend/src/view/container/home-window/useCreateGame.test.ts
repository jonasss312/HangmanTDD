/**
 * @jest-environment jsdom
 */
import {
  Renderer,
  renderHook,
  RenderHookResult,
} from "@testing-library/react-hooks";
import useCreateGame from "./useCreateGame";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { mock, MockProxy } from "jest-mock-extended";
import { ViewGame } from "../../../controller/model/ViewGame";
import { Observable, of } from "rxjs";
import { Dispatch, SetStateAction } from "react";

describe("useCreateGame", () => {
  let createGameController: MockProxy<CreateGameController>;
  let hookCreateGame: RenderHookResult<unknown, () => void, Renderer<unknown>>;
  let setGame: Dispatch<SetStateAction<ViewGame | undefined>>;
  const game = new ViewGame(1, [], [], "____", 0, "IN_PROGRESS");
  const observableGame: Observable<ViewGame> = of(game);

  beforeEach(() => {
    createGameController = mock<CreateGameController>();
    setGame = jest.fn();
    createGameController.createNewGame.mockReturnValue(observableGame);
    hookCreateGame = renderHook(() =>
      useCreateGame(createGameController, setGame)
    );
  });

  test("Can set new game data with callback", () => {
    const createGameCallBack = hookCreateGame.result.current;

    createGameCallBack();

    expect(setGame).toBeCalled();
  });
});
