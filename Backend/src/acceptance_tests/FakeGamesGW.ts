import { Game } from '../domain/Game';
import GamesGateway from '../gateway/api/GamesGateway'

export class FakeGamesGW implements GamesGateway {
    getGame(id: number): Game {
        return new Game(5, ["T"], ["B"], "TEST");
    }
    addGame(game: Game): void {
        return;
    }
    upsertGame(game: Game): void {
        return;
    }
    generateId(): number {
        return 5;
    }
}