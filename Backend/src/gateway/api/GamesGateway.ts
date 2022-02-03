import { Game } from "../../domain/Game";

export default interface GamesGateway {
    getGame(id : number): Game;
    addGame(game : Game): void;
    upsertGame(id : number, game: Game): void;
    generateId(): number;
}