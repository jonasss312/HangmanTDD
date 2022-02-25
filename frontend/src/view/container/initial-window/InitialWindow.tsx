import React from "react";
import { CreateGameController } from "../../../controller/implementation/CreateGameController";
import { GuessLetterController } from "../../../controller/implementation/GuessLetterController";
import { GameView } from "../../component/GameView";
import { ViewGame } from "../../../controller/model/ViewGame";
import { HomeWindow } from "../home-window/HomeWindow";
import { Container } from "@mui/material";

interface Props {
  createGameController: CreateGameController;
  guessLetterController: GuessLetterController;
}

export const InitialWindow = (props: Props) => {
  const [game, setGame] = React.useState<ViewGame | undefined>(undefined);

  return (
    <>
      {game === undefined ? (
        <Container color="home">
          <HomeWindow setGameCallBack={setGame} />
        </Container>
      ) : (
        <Container>
          <GameView game={game} setGameCallBack={setGame} />
        </Container>
      )}
    </>
  );
};
