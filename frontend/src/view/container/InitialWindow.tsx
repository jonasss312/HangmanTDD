import { Button } from "@mui/material";
import useCreateGame from "../../hook/useCreateGame";
import React from "react";
import { CreateGameController } from "../../controller/implementation/CreateGameController";
import { GameView } from "./GameView";

interface Props {
  createGameController: CreateGameController;
}

export const InitialWindow = (props: Props) => {
  const [game, createGame] = useCreateGame({
    createGameController: props.createGameController,
  });

  return (
    <>
      {game === undefined ? (
        <>
          <h1>HANGMAN</h1>
          <Button onClick={createGame}>START</Button>
        </>
      ) : (
        <GameView game={game} />
      )}
    </>
  );
};
