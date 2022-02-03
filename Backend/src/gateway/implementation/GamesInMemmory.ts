import { Game } from '../../domain/Game'
import GamesGateway from '../api/GamesGateway';

export class GamesStorage implements GamesGateway {
    private games: Game[];

    constructor() {
        this.games = [];
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
        return new Game(0, [], [], "", "", 0);
    }

    private tryFindGame(id: number) {
        return this.games.find(game => game.getId() === id);
    }

    upsertGame(id: number, game: Game): void {
        const foundGame = this.tryFindGame(id);
        if (foundGame) {
            const gameIndexInStorage = this.tryGetIndexInStorage(foundGame);
            if (this.indexIsValid(gameIndexInStorage))
                this.updateGameInStorage(gameIndexInStorage, game);
            else
                this.storeNewGame();
        }
    }

    private tryGetIndexInStorage(game: Game): number{
        return this.games.indexOf(game);
    }

    private indexIsValid(index: number){
        return index >= 0
    }

    private updateGameInStorage(index:number, game:Game){
        this.games[index] = game;
    }

    private storeNewGame(){
        this.addGame(new Game(0, [], [], "", "", 0));
    }
}