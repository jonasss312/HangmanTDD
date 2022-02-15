interface Props {
  status: string;
  gameId: number;
}

export const GameStatusDisplay = (props: Props) => {
  const status = props.status;
  const gameId = props.status;

  switch (status) {
    case "WON":
      return (
        <div>
          <text>YOU WIN!</text>
        </div>
      );
    case "LOST":
      return (
        <div>
          <text>YOU LOSE!</text>
        </div>
      );
    default:
      return (
        <div>
          <text>Game ID: {gameId}</text>
        </div>
      );
  }
};
