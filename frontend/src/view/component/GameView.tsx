import { ViewGame } from "../../controller/model/ViewGame";
import { GuessingLettersDisplay } from "../container/game-window/GuessingLettersDisplay";
import React from "react";
import { WrappedCollapseComponent } from "view/container/game-window/WrappedCollapseComponent";
import { HangmanDisplay } from "../component/HangmanDisplay";
import { Button, Grid, Typography } from "@mui/material";
import { GameEndModal } from "../container/game-window/GameEndModal";
import { GuessCountDisplay } from "./GuessCountDisplay";

interface Props {
  game: ViewGame;
  setGameCallBack: (game: ViewGame | undefined) => void;
}

export const GameView = (props: Props) => {
  const game: ViewGame = props.game;
  const allGuessedLetters = game.guessedLetters.concat(game.wrongLetters);

  const hiddenWord = (): JSX.Element => (
    <Typography
      variant="h2"
      data-testid="hidden_word"
      letterSpacing={"10px"}
      align={"center"}
    >
      {game.hiddenWord}
    </Typography>
  );

  const menuButton = (): JSX.Element => (
    <Button
      size="small"
      data-testid="menu_button"
      onClick={() => props.setGameCallBack(undefined)}
    >
      MAIN MENU
    </Button>
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
      <HangmanDisplay wrongGuessesCount={game.wrongLetters.length} />

      {hiddenWord()}

      <GuessingLettersDisplay
        gameId={game.id}
        allGuessedLetters={allGuessedLetters}
        setGameCallBack={props.setGameCallBack}
      />

      <GuessCountDisplay guesses={game.guesses} />

      {menuButton()}

      <GameEndModal
        status={game.status}
        setGameCallBack={props.setGameCallBack}
        word={game.hiddenWord}
      />
    </Grid>
  );

  return (
    <WrappedCollapseComponent>{renderGameView()}</WrappedCollapseComponent>
  );
};
