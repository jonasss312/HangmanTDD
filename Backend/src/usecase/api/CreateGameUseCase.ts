import { Game } from "../../domain/Game";

export default interface CreateGameUseCase {
    createGame() : Game;
}