import { Button } from "@mui/material";
import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { ViewGame } from "controller/model/ViewGame";
import { ViewGuess } from "controller/model/ViewGuess";
import React from "react";
import { ALPHABET } from "../../../constant/Alphabet";
import useLetter from "./useLetter";

interface Props {
  gameId: number;
  allGuessedLetters: string[];
  guessLetterController: GuessLetterController;
  setGameCallBack: (game: ViewGame | undefined) => void;
}

export const GuessingLettersDisplay = (props: Props) => {
  const guess = (guess: string) =>
    useLetter(
      new ViewGuess(props.gameId, guess),
      props.guessLetterController,
      props.setGameCallBack
    );

  return (
    <div>
      {ALPHABET.map((letter) => (
        <Button
          onClick={() => guess(letter)}
          data-testid={letter}
          key={letter}
          disabled={props.allGuessedLetters.includes(letter)}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};
