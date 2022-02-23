import { ViewGame } from "../../controller/model/ViewGame";
import { GameStatusDisplay } from "./GameStatusDisplay";
import { GuessingLettersDisplay } from "../container/game-window/GuessingLettersDisplay";
import React from "react";
import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { WrappedCollapseComponent } from "view/container/game-window/WrappedCollapseComponent";
import { HangmanDisplay } from "../component/HangmanDisplay";
import { Grid, Typography } from "@mui/material";
import { useColorChange } from "./useColorChange";

interface Props {
  game: ViewGame;
  guessLetterController: GuessLetterController;
  setGameCallBack: (game: ViewGame | undefined) => void;
}

export const GameView = (props: Props) => {
  const colorState = useColorChange();

  const game: ViewGame = props.game;
  const allGuessedLetters = game.guessedLetters.concat(game.wrongLetters);

  const hiddenWord = (): JSX.Element => (
    <Typography variant="h2" data-testid="hidden_word" letterSpacing={"10px"}>
      {game.hiddenWord}
    </Typography>
  );

  const guessesCount = (): JSX.Element => (
    <Typography
      variant="overline"
      style={{ color: colorState }}
      data-testid="guesses"
    >
      Guesses: {game.guesses}
    </Typography>
  );

  const renderGameView = (): JSX.Element => (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <HangmanDisplay
        wrongGuessesCount={game.wrongLetters.length}
        colorState={colorState}
      />

      {hiddenWord()}

      <GuessingLettersDisplay
        gameId={game.id}
        allGuessedLetters={allGuessedLetters}
        guessLetterController={props.guessLetterController}
        setGameCallBack={props.setGameCallBack}
      />

      {guessesCount()}

      <GameStatusDisplay status={game.status} gameId={game.id} />
    </Grid>
  );

  return (
    <WrappedCollapseComponent>{renderGameView()}</WrappedCollapseComponent>
  );
};
