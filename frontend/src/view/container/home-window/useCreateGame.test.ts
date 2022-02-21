/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react-hooks";
import useCreateGame from "./useCreateGame";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { mock, MockProxy } from "jest-mock-extended";
import { ViewGame } from "../../../controller/model/ViewGame";
import { Observable, of } from "rxjs";

describe("useCreateGame", () => {
  let createGameController: MockProxy<CreateGameController>;
  let hookCreateGame: any;
  let setGame: (game: ViewGame | undefined) => void;
  const GAME = new ViewGame(1, [], [], "____", 0, "IN_PROGRESS");
  const OBSERVABLE_GAME: Observable<ViewGame> = of(GAME);

  beforeEach(() => {
    createGameController = mock<CreateGameController>();
    setGame = jest.fn();
    createGameController.createNewGame.mockReturnValue(OBSERVABLE_GAME);
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
