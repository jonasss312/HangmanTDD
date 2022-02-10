import { Game } from '../../domain/Game'
import GamesGateway from '../api/GamesGateway';

export class GamesStorage implements GamesGateway {
    private readonly games: Game[];

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

    getGame(id: number): Game | undefined{
        return this.games.find(game => game.getId() === id);
    }

    upsertGame(game: Game): void {
        const index = this.games.findIndex(item => item.getId() === game.getId());
        if (index > -1) {
            this.games.splice(index,1);
        }
        this.games.push(game);
    }
}