import { Game } from '../../domain/Game'
import GamesGateway from '../api/GamesGateway';

export class GamesStorage implements GamesGateway {
    private games: Game[];

    constructor() {
        this.games = [];
    }

    generateId(): number {
        return this.games.length + 1;
    }

    getGames() {
        return this.games;
    }

    addGame(game: Game) {
        this.games.push(game);
    }

    getGame(id: number): Game {
        const foundGame = this.tryFindGame(id);
        if (foundGame)
            return foundGame;
        return new Game(0, [], [], "");
    }

    private tryFindGame(id: number): Game | undefined {
        return this.games.find(game => game.getId() === id);
    }

    upsertGame(game: Game): void {
        this.games = this.games.filter(g => g.getId() !== game.getId());
        this.games.push(game);
    }
}