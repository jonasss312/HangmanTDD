import { Button } from "@mui/material";
import React from "react";
import { ALPHABET } from "../../constant/Alphabet";

interface Props {
  allGuessedLetters: string[];
}

export const GuessingLettersDisplay = (props: Props) => {
  const allGuessedLetters = props.allGuessedLetters;

  const isLetterUsed = (allGuessedLetters: string[], letter: string): boolean =>
    allGuessedLetters.includes(letter);

  return (
    <div>
      {ALPHABET.map((letter) => (
        <Button
          role={letter}
          key={letter}
          disabled={isLetterUsed(allGuessedLetters, letter)}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};
