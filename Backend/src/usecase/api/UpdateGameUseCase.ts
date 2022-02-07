import { BoundaryGame } from "../model/BoundaryGame";

export default interface UpdateGameUseCase {
    upsertGame(game: BoundaryGame): BoundaryGame;
}