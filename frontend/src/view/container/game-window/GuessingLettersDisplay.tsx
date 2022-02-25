import { Button, Fade, Grid } from "@mui/material";
import { ViewGame } from "controller/model/ViewGame";
import { ViewGuess } from "controller/model/ViewGuess";
import React from "react";
import { ALPHABET } from "../../../constant/Alphabet";
import useLetter from "./useLetter";

interface Props {
  gameId: number;
  allGuessedLetters: string[];
  setGameCallBack: (game: ViewGame | undefined) => void;
}

export const GuessingLettersDisplay = (props: Props) => {
  const guess = useLetter(props.setGameCallBack);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {ALPHABET.map((letter) => (
        <Fade
          key={letter}
          in={!props.allGuessedLetters.includes(letter)}
          timeout={500}
        >
          <Button
            size="small"
            onClick={() => guess(new ViewGuess(props.gameId, letter))}
            data-testid={letter}
            disabled={props.allGuessedLetters.includes(letter)}
          >
            {letter}
          </Button>
        </Fade>
      ))}
    </Grid>
  );
};
