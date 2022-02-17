import { render, screen } from "@testing-library/react";
import React from "react";
import { InitialWindow } from "./InitialWindow";
import { CreateGameController } from "../../controller/implementation/CreateGameController";
import { mock, MockProxy } from "jest-mock-extended";

describe("InitialWindow", () => {
  let createGameController: MockProxy<CreateGameController>;

  beforeEach(() => {
    createGameController = mock<CreateGameController>();
  });

  test("Can display heading and start button before starting", () => {
    jest.mock("../../hook/useCreateGame", () => {
      return [undefined, jest.fn()];
    });

    render(<InitialWindow createGameController={createGameController} />);

    expect(screen.getByRole("heading")).toHaveTextContent("HANGMAN");
    expect(screen.getByRole("start_game_button")).toHaveTextContent("START");
  });
});
