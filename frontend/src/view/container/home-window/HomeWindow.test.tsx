import { render, screen } from "@testing-library/react";
import React from "react";
import { InitialWindow } from "../initial-window/InitialWindow";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { mock, MockProxy } from "jest-mock-extended";

describe("HomeWindow", () => {
  let createGameController: MockProxy<CreateGameController>;

  beforeEach(() => {
    createGameController = mock<CreateGameController>();
  });

  test("Can display heading and start button", () => {
    render(<InitialWindow createGameController={createGameController} />);

    expect(screen.getByTestId("heading")).toBeInTheDocument();
    expect(screen.getByTestId("start_button")).toBeInTheDocument();
  });
});
