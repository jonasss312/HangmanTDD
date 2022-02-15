import { CreateGameController } from "../controller/implementation/CreateGameController";
import { useEffect, useState } from "react";
import { Observable } from "rxjs";
import { ViewGame } from "../controller/model/ViewGame";

export function useCreateGame(createGameController: CreateGameController) {
  const [game, setGame] = useState<Observable<ViewGame> | undefined>(undefined);
  const [updateGame, setUpdateGame] = useState<boolean>(false);

  useEffect(() => {
    // on intialization create new game
    setGame(createGameController.createNewGame());
  }, []);

  useEffect(() => {
    // need update game controller fro setGame
  }, [updateGame]);

  return <>{game?.subscribe((element) => console.log(element))}</>;
}
