import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { InitialWindow } from "./InitialWindow";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { mock, MockProxy } from "jest-mock-extended";
import { ViewGame } from "controller/model/ViewGame";
import * as useInitialWindow from "./useInitialWindow";
import { ALPHABET } from "../../../constant/Alphabet";

describe("InitialWindow", () => {
  let createGameController: MockProxy<CreateGameController>;

  beforeEach(() => {
    createGameController = mock<CreateGameController>();
  });

  test("Can display heading and start button before starting", () => {
    render(<InitialWindow createGameController={createGameController} />);

    expect(screen.getByTestId("heading")).toHaveTextContent("HANGMAN");
    expect(screen.getByTestId("start_button")).toHaveTextContent("START");
  });

  test("Can fire create new game hook when 'START' button is clicked", () => {
    const createGameMock = jest.fn();
    const game = undefined;
    jest
      .spyOn(useInitialWindow, "default")
      .mockReturnValue({ game, createGame: createGameMock });

    render(<InitialWindow createGameController={createGameController} />);
    fireEvent.click(screen.getByTestId("start_button"));

    expect(createGameMock).toBeCalled();
  });

  test("Can display game view when started", () => {
    const createGameMock = jest.fn();
    const hiddenWord = "____";
    const guesses = 0;
    const game = new ViewGame(1, [], [], hiddenWord, guesses, "IN_PROGRESS");
    jest
      .spyOn(useInitialWindow, "default")
      .mockReturnValue({ game, createGame: createGameMock });

    render(<InitialWindow createGameController={createGameController} />);

    expect(screen.getByTestId("hidden_word")).toHaveTextContent(hiddenWord);
    expect(screen.getByTestId("guesses")).toHaveTextContent(guesses.toString());
    ALPHABET.forEach((letter) => {
      expect(screen.getByTestId(letter)).toBeEnabled();
    });
    expect(screen.getByTestId("game_status")).toHaveTextContent("Game ID: 1");
  });
});
