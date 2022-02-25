/**
 * @jest-environment jsdom
 */

import { renderHook } from "@testing-library/react-hooks";
import { ViewGame } from "controller/model/ViewGame";
import { mock } from "jest-mock-extended";
import { from } from "rxjs";
import useCreateObserver from "./useCreateObserver";
import { act } from "react-dom/test-utils";
import * as Snackbar from "notistack";

describe("useCreateObserver", () => {
  let createObserverHook: any;
  let setGame: (game: ViewGame | undefined) => void;
  let VIEW_GAME: ViewGame = mock<ViewGame>();

  beforeEach(() => {
    setGame = jest.fn();
    jest
      .spyOn(Snackbar, "useSnackbar")
      .mockReturnValue(mock<Snackbar.ProviderContext>());
  });

  test("Can call set game state method with created observer", () => {
    createObserverHook = renderHook(() =>
      useCreateObserver<ViewGame | undefined>(setGame)
    );
    let observable = from([VIEW_GAME]);

    act(() => {
      observable.subscribe(createObserverHook.result.current);
    });

    expect(setGame).toBeCalledWith(VIEW_GAME);
  });
});
