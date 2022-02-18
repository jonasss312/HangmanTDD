import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { Dispatch, SetStateAction, useState } from "react";
import { ViewGame } from "../../../controller/model/ViewGame";

interface Props {
  createGameController: CreateGameController;
  setGameCallBack: Dispatch<SetStateAction<ViewGame | undefined>>;
}

export default function useCreateGame(props: Props): () => void {
  const createGame = () =>
    props.createGameController.createNewGame().subscribe(props.setGameCallBack);

  return createGame;
}
