import { ViewGame } from "../../../controller/model/ViewGame";
import useControllerContext from "../game-window/useControllerContext";

export default function useCreateGame(
  setGameCallBack: (game: ViewGame | undefined) => void
): () => void {
  const createGameController = useControllerContext().createGameController;

  const createGame = () =>
    createGameController.createNewGame().subscribe(setGameCallBack);

  return createGame;
}
