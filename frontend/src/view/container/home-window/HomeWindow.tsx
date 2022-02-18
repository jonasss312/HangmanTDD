import { Button } from "@mui/material";
import useCreateGame from "./useCreateGame";
import React, { Dispatch, SetStateAction } from "react";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { ViewGame } from "../../../controller/model/ViewGame";

interface Props {
  createGameController: CreateGameController;
  setGameCallBack: Dispatch<SetStateAction<ViewGame | undefined>>;
}

export const HomeWindow = (props: Props) => {
  const createGame = useCreateGame({
    createGameController: props.createGameController,
    setGameCallBack: props.setGameCallBack,
  });

  return (
    <div>
      <h1 data-testid="heading">HANGMAN</h1>
      <Button data-testid="start_button" onClick={createGame}>
        START
      </Button>
    </div>
  );
};
