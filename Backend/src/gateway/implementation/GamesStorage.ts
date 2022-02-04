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
        const foundGame = this.tryFindGame(game.getId());
        if (foundGame) {
            const gameIndexInStorage = this.tryGetIndexInStorage(foundGame);
            if (this.indexIsValid(gameIndexInStorage))
                return this.updateGameInStorage(gameIndexInStorage, game);
        }
        this.storeNewGame(game);
    }

    private tryGetIndexInStorage(game: Game): number {
        return this.games.indexOf(game);
    }

    private indexIsValid(index: number) {
        return index >= 0
    }

    private updateGameInStorage(index: number, game: Game) {
        this.games[index] = game;
    }

    private storeNewGame(game:Game) {
        this.addGame(game);
    }
}