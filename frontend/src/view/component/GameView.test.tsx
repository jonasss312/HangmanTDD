import { render, screen } from "@testing-library/react";
import { ViewGame } from "../../controller/model/ViewGame";
import React from "react";
import { GameView } from "./GameView";

describe("GameView", () => {
  const SET_GAME: () => void = jest.fn();

  beforeEach(() => {});

  test("Can display game data, button and game end modal window", () => {
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
    expect(screen.getByTestId("hangman_display")).toBeInTheDocument();
    expect(screen.getByTestId("guessing_letters_display")).toBeInTheDocument();
    expect(screen.getByTestId("game_end_modal")).toBeInTheDocument();
    expect(screen.getByTestId("menu_button")).toBeInTheDocument();
  });
});

jest.mock("../component/HangmanDisplay", () => ({
  HangmanDisplay: () => <div data-testid="hangman_display" />,
}));

jest.mock("../container/game-window/GuessingLettersDisplay", () => ({
  GuessingLettersDisplay: () => <div data-testid="guessing_letters_display" />,
}));

jest.mock("../container/game-window/GameEndModal", () => ({
  GameEndModal: () => <div data-testid="game_end_modal" />,
}));
