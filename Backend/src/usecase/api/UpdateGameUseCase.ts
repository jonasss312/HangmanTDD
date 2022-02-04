import { Game } from "../../domain/Game";
import { BoundaryGame } from "../model/BoundaryGame";

export default interface CreateGameUseCase {
    updateGame(game: BoundaryGame): BoundaryGame;
}