import { render, screen } from "@testing-library/react";
import { ViewGame } from "../../controller/model/ViewGame";
import React from "react";
import { GameView } from "./GameView";
import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { mock, MockProxy } from "jest-mock-extended";
import { CreateGameController } from "controller/implementation/CreateGameController";

describe("GameView", () => {
  const SET_GAME: () => void = jest.fn();
  let guessLetterController: MockProxy<GuessLetterController>;
  let createGameController: MockProxy<CreateGameController>;

  beforeEach(() => {
    guessLetterController = mock<GuessLetterController>();
    createGameController = mock<CreateGameController>();
  });

  test("Can display hidden word and guess count", () => {
    const guessCount = 2;
    const hiddenWord = "A___";
    const game: ViewGame = new ViewGame(
      1,
      ["A"],
      ["B"],
      hiddenWord,
      guessCount,
      "IN_PROGRESS"
    );
    render(<GameView game={game} setGameCallBack={SET_GAME} />);

    expect(screen.getByTestId("hidden_word")).toHaveTextContent(hiddenWord);
    expect(screen.getByTestId("guesses")).toHaveTextContent(
      guessCount.toString()
    );
  });
});
