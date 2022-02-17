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
      return <p>YOU WIN!</p>;
    case "LOST":
      return <p>YOU LOSE!</p>;
    default:
      return <p>Game ID: {gameId}</p>;
  }
};
