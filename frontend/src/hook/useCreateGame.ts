import { CreateGameController } from "../controller/implementation/CreateGameController";
import { useState } from "react";
import { ViewGame } from "../controller/model/ViewGame";

interface Props {
  createGameController: CreateGameController;
}

export default function useCreateGame(
  props: Props
): [ViewGame | undefined, () => void] {
  const [game, setGame] = useState<ViewGame | undefined>(undefined);

  const createGame = () =>
    props.createGameController
      .createNewGame()
      .subscribe((game) => setGame(game));

  return [game, createGame];
}
