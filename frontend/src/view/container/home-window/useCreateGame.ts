import { ViewGame } from "../../../controller/model/ViewGame";
import useControllerContext from "../context/useControllerContext";
import useCeateObserver from "../observer/useCreateObserver";

export default function useCreateGame(
  setGameCallBack: (game: ViewGame | undefined) => void
): () => void {
  const createGameController = useControllerContext().createGameController;
  const observer = useCeateObserver(setGameCallBack);

  const createGame = () =>
    createGameController.createNewGame().subscribe(observer);

  return createGame;
}
