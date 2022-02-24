import { render, screen } from "@testing-library/react";
import React from "react";
import { InitialWindow } from "./InitialWindow";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { mock, MockProxy } from "jest-mock-extended";
import { ViewGame } from "controller/model/ViewGame";
import { GuessLetterController } from "controller/implementation/GuessLetterController";

describe("InitialWindow", () => {
  let createGameController: MockProxy<CreateGameController>;
  let guessLetterController: MockProxy<GuessLetterController>;

  beforeEach(() => {
    createGameController = mock<CreateGameController>();
    guessLetterController = mock<GuessLetterController>();
  });

  test("Can display heading and start button when game is not started", () => {
    renderWindow(createGameController, guessLetterController);

    expect(screen.getByTestId("home_window")).toBeInTheDocument();
  });

  test("Can display game view when game is started", () => {
    const game = new ViewGame(1, [], [], "____", 0, "IN_PROGRESS");
    const useStateMock: any = () => [game, jest.fn()];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    renderWindow(createGameController, guessLetterController);

    expect(screen.getByTestId("game_view")).toBeInTheDocument();
  });
});

function renderWindow(
  createGameController: CreateGameController,
  guessLetterController: GuessLetterController
) {
  render(
    <InitialWindow
      createGameController={createGameController}
      guessLetterController={guessLetterController}
    />
  );
}

jest.mock("../home-window/HomeWindow", () => ({
  HomeWindow: () => <div data-testid="home_window" />,
}));

jest.mock("../../component/GameView", () => ({
  GameView: () => <div data-testid="game_view" />,
}));
