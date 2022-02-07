import { Game } from "../../domain/Game";

export default interface CreateGameUseCase {
    updateGame(game: Game): Game;
}