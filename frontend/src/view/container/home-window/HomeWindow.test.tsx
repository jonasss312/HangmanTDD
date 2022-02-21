import { render, screen } from "@testing-library/react";
import React from "react";
import { InitialWindow } from "../initial-window/InitialWindow";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { mock, MockProxy } from "jest-mock-extended";
import { GuessLetterController } from "controller/implementation/GuessLetterController";

describe("HomeWindow", () => {
  let createGameController: MockProxy<CreateGameController>;
  let guessLetterController: MockProxy<GuessLetterController>;

  beforeEach(() => {
    createGameController = mock<CreateGameController>();
    guessLetterController = mock<GuessLetterController>();
  });

  test("Can display heading and start button", () => {
    render(
      <InitialWindow
        createGameController={createGameController}
        guessLetterController={guessLetterController}
      />
    );

    expect(screen.getByTestId("heading")).toBeInTheDocument();
    expect(screen.getByTestId("start_button")).toBeInTheDocument();
  });
});
