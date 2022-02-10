import { BoundaryGame } from "../model/BoundaryGame";

export default interface UpsertGameUseCase {
    upsertGame(game: BoundaryGame): BoundaryGame;
}