import React from "react";

interface Props {
  status: string;
  gameId: number;
}

export const GameStatusDisplay = (props: Props) => {
  const status = props.status;
  const gameId = props.status;

  switch (status) {
    case "WON":
      return <text>YOU WIN!</text>;
    case "LOST":
      return <text>YOU LOSE!</text>;
    default:
      return <text>Game ID: {gameId}</text>;
  }
};
