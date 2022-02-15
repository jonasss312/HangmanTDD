import { ViewGame } from "../../controller/model/ViewGame";

export function GameStatusDsiplay(game: ViewGame) {
  switch (game.status) {
    case "WON":
      return <text>YOU WIN!</text>;
    case "LOST":
      return <text>YOU LOSE!</text>;
    default:
      return <text>Game ID: {game.id}</text>;
  }
}
