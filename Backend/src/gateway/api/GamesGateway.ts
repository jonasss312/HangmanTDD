import { Game } from "../../domain/Game";

export default interface GamesGateway {
    getGame(id : number): Game| undefined;
    addGame(game : Game): void;
    upsertGame(game: Game): void;
    generateId(): number;
}