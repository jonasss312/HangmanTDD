import { BoundaryGame } from "../model/BoundaryGame";

export default interface CreateGameUseCase {
    updateGame(game: BoundaryGame): BoundaryGame;
}