import { ViewGame } from "../../controller/model/ViewGame";
import { GuessingLettersDisplay } from "../container/game-window/GuessingLettersDisplay";
import React from "react";
import { WrappedCollapseComponent } from "view/container/game-window/WrappedCollapseComponent";
import { HangmanDisplay } from "../component/HangmanDisplay";
import { Button, Grid, Typography } from "@mui/material";
import { useColorChange } from "./useColorChange";
import GameEndModal from "../container/game-window/GameEndModal";
import { BACKGROUND_COLOR } from "constant/Colors";

interface Props {
  game: ViewGame;
  setGameCallBack: (game: ViewGame | undefined) => void;
}

export const GameView = (props: Props) => {
  const colorStateHangMan = useColorChange([BACKGROUND_COLOR, "#33eaff"]);
  const colorStateGuessCount = useColorChange(["#33eaff", "red"]);

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
      style={{ color: colorStateGuessCount }}
      data-testid="guesses"
    >
      Guesses: {game.guesses}
    </Typography>
  );

  const returntoMenuButton = (): JSX.Element => (
    <Button size="small" onClick={() => props.setGameCallBack(undefined)}>
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
      <HangmanDisplay
        wrongGuessesCount={game.wrongLetters.length}
        colorState={colorStateHangMan}
      />

      {hiddenWord()}

      <GuessingLettersDisplay
        gameId={game.id}
        allGuessedLetters={allGuessedLetters}
        setGameCallBack={props.setGameCallBack}
      />

      {guessesCount()}

      {returntoMenuButton()}

      <GameEndModal
        status={game.status}
        setGameCallBack={props.setGameCallBack}
      />
    </Grid>
  );

  return (
    <WrappedCollapseComponent>{renderGameView()}</WrappedCollapseComponent>
  );
};
