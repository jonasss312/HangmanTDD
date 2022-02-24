import { render, screen } from "@testing-library/react";
import React from "react";
import { GuessingLettersDisplay } from "./GuessingLettersDisplay";
import { ALPHABET } from "../../../constant/Alphabet";
import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { mock, MockProxy } from "jest-mock-extended";

describe("GuessingLettersDisplay", () => {
  const SET_GAME: () => void = jest.fn();
  let guessLetterController: MockProxy<GuessLetterController>;

  beforeEach(() => {
    guessLetterController = mock<GuessLetterController>();
  });

  test("Can display all enabled letters", () => {
    renderWithUsedLetters([]);

    ALPHABET.forEach((letter) => {
      expect(screen.getByTestId(letter)).toBeEnabled();
    });
  });

  test("Can display all disabled letters", () => {
    renderWithUsedLetters(ALPHABET);

    ALPHABET.forEach((letter) => {
      expect(screen.getByTestId(letter)).toBeDisabled();
    });
  });

  function renderWithUsedLetters(lettersArray: string[]) {
    render(
      <GuessingLettersDisplay
        allGuessedLetters={lettersArray}
        setGameCallBack={SET_GAME}
        gameId={0}
      />
    );
  }
});
