import { Button, Fade, Grid, Stack, Typography } from "@mui/material";
import useCreateGame from "./useCreateGame";
import React from "react";
import { ViewGame } from "../../../controller/model/ViewGame";
import { GameRulesDisplay } from "../../component/GameRulesDisplay";

interface Props {
  setGameCallBack: (game: ViewGame | undefined) => void;
}

export const HomeWindow = (props: Props) => {
  const createGame = useCreateGame(props.setGameCallBack);

  return (
    <Fade in={true} timeout={3000}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid>
          <Typography variant="h1" data-testid="heading">
            HANGMAN
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            data-testid="start_button"
            onClick={createGame}
          >
            BEGIN
          </Button>
        </Grid>
        <GameRulesDisplay />
      </Stack>
    </Fade>
  );
};
