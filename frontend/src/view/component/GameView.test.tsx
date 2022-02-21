import { render, screen } from "@testing-library/react";
import { ViewGame } from "../../controller/model/ViewGame";
import React from "react";
import { GameView } from "./GameView";

describe("GameView", () => {
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
    render(<GameView game={game} />);

    expect(screen.getByTestId("hidden_word")).toHaveTextContent(hiddenWord);
    expect(screen.getByTestId("guesses")).toHaveTextContent(
      guessCount.toString()
    );
  });
});
