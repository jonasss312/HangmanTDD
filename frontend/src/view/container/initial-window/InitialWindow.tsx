import { Button } from "@mui/material";
import useCreateGame from "./useInitialWindow";
import React from "react";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { GameView } from "../../component/GameView";

interface Props {
  createGameController: CreateGameController;
}

export const InitialWindow = (props: Props) => {
  const createGameData = useCreateGame({
    createGameController: props.createGameController,
  });

  return (
    <>
      {createGameData.game === undefined ? (
        <>
          <h1 data-testid="heading">HANGMAN</h1>
          <Button
            data-testid="start_button"
            onClick={createGameData.createGame}
          >
            START
          </Button>
        </>
      ) : (
        <GameView game={createGameData.game} />
      )}
    </>
  );
};
