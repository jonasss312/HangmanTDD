import React from "react";

interface Props {
  status: string;
  gameId: number;
}

export const GameStatusDisplay = (props: Props) => {
  const status = props.status;
  const gameId = props.gameId;

  switch (status) {
    case "WON":
      return <p data-testid="game_status">YOU WIN!</p>;
    case "LOST":
      return <p data-testid="game_status">YOU LOSE!</p>;
    default:
      return <p data-testid="game_status">Game ID: {gameId}</p>;
  }
};
