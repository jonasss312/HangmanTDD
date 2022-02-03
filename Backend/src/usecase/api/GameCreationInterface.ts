import { BoundaryGame } from "../model/BoundaryGame";

export default interface GameCreatorInterface {
    createGame() : BoundaryGame;
}