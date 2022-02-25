import React from "react";
import { GameView } from "../../component/GameView";
import { ViewGame } from "../../../controller/model/ViewGame";
import { HomeWindow } from "../home-window/HomeWindow";
import { Container } from "@mui/material";

export const InitialWindow = () => {
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
