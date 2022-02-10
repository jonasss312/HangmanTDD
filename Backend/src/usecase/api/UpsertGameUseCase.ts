import { BoundaryGame } from "../model/BoundaryGame";
import { BoundaryUpdate } from "../model/BoundaryUpdate";

export default interface UpsertGameUseCase {
    upsertGame(game: BoundaryUpdate): BoundaryGame;
}