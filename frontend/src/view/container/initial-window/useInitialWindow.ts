import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { useState } from "react";
import { ViewGame } from "../../../controller/model/ViewGame";

export interface CreateGameData {
  game: ViewGame | undefined;
  createGame: () => void;
}

interface Props {
  createGameController: CreateGameController;
}

export default function useInitialWindow(props: Props): CreateGameData {
  const [game, setGame] = useState<ViewGame | undefined>(undefined);

  const createGame = () =>
    props.createGameController.createNewGame().subscribe(setGame);

  return { game, createGame };
}
