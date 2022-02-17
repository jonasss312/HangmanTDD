import { Button } from "@mui/material";
import React from "react";

interface Props {
  allGuessedLetters: string[];
}

export const GuessingLettersDisplay = (props: Props) => {
  const allGuessedLetters = props.allGuessedLetters;

  const alphabet = Array.from(Array(26))
    .map((e, i) => i + 65)
    .map((x) => String.fromCharCode(x));

  const isLetterUsed = (allGuessedLetters: string[], letter: string): boolean =>
    allGuessedLetters.includes(letter);

  return (
    <div>
      {alphabet.map((letter) => (
        <Button role={letter} key={letter} disabled={isLetterUsed(allGuessedLetters, letter)}>
          {letter}
        </Button>
      ))}
    </div>
  );
};
