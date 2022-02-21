import { render, screen } from "@testing-library/react";
import { ViewGame } from "../../controller/model/ViewGame";
import React from "react";
import { GameView } from "./GameView";
import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { mock, MockProxy } from "jest-mock-extended";

describe("GameView", () => {
  const SET_GAME: () => void = jest.fn();
  let guessLetterController: MockProxy<GuessLetterController>;

  beforeEach(() => {
    guessLetterController = mock<GuessLetterController>();
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
    render(
      <GameView
        game={game}
        setGameCallBack={SET_GAME}
        guessLetterController={guessLetterController}
      />
    );

    expect(screen.getByTestId("hidden_word")).toHaveTextContent(hiddenWord);
    expect(screen.getByTestId("guesses")).toHaveTextContent(
      guessCount.toString()
    );
  });
});
