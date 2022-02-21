import { Button } from "@mui/material";
import React from "react";
import { ALPHABET } from "../../constant/Alphabet";

interface Props {
  allGuessedLetters: string[];
}

export const GuessingLettersDisplay = (props: Props) => {
  const allGuessedLetters = props.allGuessedLetters;

  return (
    <div>
      {ALPHABET.map((letter) => (
        <Button
          data-testid={letter}
          key={letter}
          disabled={allGuessedLetters.includes(letter)}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};
