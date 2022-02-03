import { BoundaryGame } from "./BoundaryGame";

export default interface GameCreatorInterface {
    createGame() : BoundaryGame;
}