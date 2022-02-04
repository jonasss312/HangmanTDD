import { BoundaryGame } from "../model/BoundaryGame";

export default interface CreateGameUseCase {
    createGame() : BoundaryGame;
}