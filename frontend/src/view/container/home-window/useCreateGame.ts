import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { ViewGame } from "../../../controller/model/ViewGame";

export default function useCreateGame(
  createGameController: CreateGameController,
  setGameCallBack: (game: ViewGame | undefined) => void
): () => void {
  const createGame = () =>
    createGameController.createNewGame().subscribe(setGameCallBack);

  return createGame;
}
