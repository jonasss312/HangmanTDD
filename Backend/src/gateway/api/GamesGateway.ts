import { Game } from "../../domain/Game";

export default interface GamesInterface {
    getGame(id : number): Game;
    addGame(game : Game): void;
    updateGame(id : number, game: Game): void;
}