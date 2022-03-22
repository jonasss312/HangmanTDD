import { render, screen } from "@testing-library/react";
import React from "react";
import { GameEndModal } from "./GameEndModal";
import * as useCreateGame from "../home-window/useCreateGame";

describe("GameEndModal", () => {
  const SET_GAME_CALL_BACK = jest.fn();
  beforeEach(() => {
    jest.spyOn(useCreateGame, "default").mockReturnValue(jest.fn());
  });

  test("Can display game won", () => {
    renderWithStatus("WON");

    expect(screen.getByTestId("won_text")).toBeInTheDocument();
  });

  test("Can display game lost", () => {
    renderWithStatus("LOST");

    expect(screen.getByTestId("lost_text")).toBeInTheDocument();
  });

  test("Can display new game button", () => {
    renderWithStatus("LOST");

    expect(screen.getByTestId("new_game_button")).toBeInTheDocument();
  });

  test("Can display hidden word when lost", () => {
    renderWithStatus("LOST");

    expect(screen.getByTestId("hidden_word")).toBeInTheDocument();
  });

  function renderWithStatus(status: string) {
    render(
      <GameEndModal
        status={status}
        setGameCallBack={SET_GAME_CALL_BACK}
        word="TEST"
      />
    );
  }
});
