import { BoundaryGame } from "../model/BoundaryGame";

export default interface RestCreateGame {
    createGame() : BoundaryGame;
}