import { render, screen } from "@testing-library/react";
import React from "react";
import { GuessingLettersDisplay } from "./GuessingLettersDisplay";
import { ALPHABET } from "../../constant/Alphabet";

describe("GuessingLettersDisplay", () => {
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
    render(<GuessingLettersDisplay allGuessedLetters={lettersArray} />);
  }
});
