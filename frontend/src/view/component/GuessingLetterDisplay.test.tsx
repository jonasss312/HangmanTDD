import { render, screen } from "@testing-library/react";
import React from "react";
import { GuessingLettersDisplay } from "./GuessingLettersDisplay";
import { ALPHABET } from "../../constant/Alphabet";

describe("GuessingLettersDisplay", () => {
  test("Can display all enabled letters", () => {
    RenderWithUsedLetters([]);

    ALPHABET.forEach((letter) => {
      expect(screen.getByTestId(letter)).toBeEnabled();
    });
  });

  test("Can display all disabled letters", () => {
    RenderWithUsedLetters(ALPHABET);

    ALPHABET.forEach((letter) => {
      expect(screen.getByTestId(letter)).toBeDisabled();
    });
  });

  function RenderWithUsedLetters(lettersArray: string[]) {
    render(<GuessingLettersDisplay allGuessedLetters={lettersArray} />);
  }
});
