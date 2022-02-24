import { render, screen } from "@testing-library/react";
import React from "react";
import { ALPHABET } from "../../../constant/Alphabet";
import { mock, MockProxy } from "jest-mock-extended";
import GameEndModal from "./GameEndModal";
import { CreateGameController } from "controller/implementation/CreateGameController";

describe("GameEndModal", () => {
  const SET_GAME_CALL_BACK = jest.fn();
  let createGameController: MockProxy<CreateGameController>;
  beforeEach(() => {
    createGameController = mock<CreateGameController>();
  });

  test("Can display game won", () => {
    renderWithStatus("WON", createGameController);

    expect(screen.getByTestId("won_text")).toBeInTheDocument();
  });

  test("Can display game lost", () => {
    renderWithStatus("LOST", createGameController);

    expect(screen.getByTestId("lost_text")).toBeInTheDocument();
  });

  test("Can display new game button", () => {
    renderWithStatus("LOST", createGameController);

    expect(screen.getByTestId("new_game_button")).toBeInTheDocument();
  });

  function renderWithStatus(
    status: string,
    createGameController: CreateGameController
  ) {
    render(
      <GameEndModal
        status={status}
        setGameCallBack={SET_GAME_CALL_BACK}
        createGameController={createGameController}
      />
    );
  }
});
