import { render, screen } from "@testing-library/react";
import React from "react";
import { InitialWindow } from "./InitialWindow";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { mock, MockProxy } from "jest-mock-extended";
import { ViewGame } from "controller/model/ViewGame";

describe("InitialWindow", () => {
  let createGameController: MockProxy<CreateGameController>;

  beforeEach(() => {
    createGameController = mock<CreateGameController>();
  });

  test("Can display heading and start button when game is not started", () => {
    render(<InitialWindow createGameController={createGameController} />);

    expect(screen.getByTestId("home_window")).toBeInTheDocument();
  });

  test("Can display game view when game is started", () => {
    const game = new ViewGame(1, [], [], "____", 0, "IN_PROGRESS");
    const useStateMock: any = () => [game, jest.fn()];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    render(<InitialWindow createGameController={createGameController} />);

    expect(screen.getByTestId("game_view")).toBeInTheDocument();
  });
});

jest.mock("../home-window/HomeWindow", () => ({
  HomeWindow: () => <div data-testid="home_window" />,
}));

jest.mock("../../component/GameView", () => ({
  GameView: () => <div data-testid="game_view" />,
}));
