import React from "react";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { GuessLetterController } from "../../../controller/implementation/GuessLetterController";
import { GameView } from "../../component/GameView";
import { ViewGame } from "../../../controller/model/ViewGame";
import { HomeWindow } from "../home-window/HomeWindow";

interface Props {
  createGameController: CreateGameController;
  guessLetterController: GuessLetterController;
}

export const InitialWindow = (props: Props) => {
  const [game, setGame] = React.useState<ViewGame | undefined>(undefined);

  return (
    <>
      {game === undefined ? (
        <HomeWindow
          createGameController={props.createGameController}
          setGameCallBack={setGame}
        />
      ) : (
        <GameView
          game={game}
          setGameCallBack={setGame}
          guessLetterController={props.guessLetterController}
        />
      )}
    </>
  );
};
