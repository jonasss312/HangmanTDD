import GamesGateway from '../../gateway/api/GamesGateway';
import UpdateGameUseCase from '../api/UpdateGameUseCase'

import { Game } from '../../domain/Game';
import { BoundaryGame } from '../model/BoundaryGame';
import { GameB2DConverter } from './GameB2DConverter';
import { GameD2BConverter } from './GameD2BConverter';

export class UpdateGameInteractor implements UpdateGameUseCase {
    private readonly gamesGateway: GamesGateway;
    private readonly gameD2BConverter: GameD2BConverter;
    private readonly gameB2DConverter: GameB2DConverter;

    constructor(gamesGateway: GamesGateway) {
        this.gamesGateway = gamesGateway;
        this.gameD2BConverter = new GameD2BConverter();
        this.gameB2DConverter = new GameB2DConverter();
    }

    /*updateGame(gameBoundary: BoundaryGame): BoundaryGame {
        const foundGame = this.getGameFromDatabase(gameBoundary.getId())
        this.tryUpdateGameInDatabase(gameBoundary, foundGame.getWord())
        const updatedGame = this.getGameFromDatabase(gameBoundary.getId())
        return this.gameD2BConverter.convert(updatedGame)
    }*/

    updateGame(game: Game): Game {
        this.tryUpsertGameInDatabase(game)
        const updatedGame = this.getGameFromDatabase(game.getId())
        return updatedGame;
    }

    private tryUpsertGameInDatabase(game:Game){
        this.gamesGateway.upsertGame(game);
    }

    /*private tryUpdateGameInDatabase(gameBoundary: BoundaryGame, word: string) {
        this.gamesGateway.upsertGame(
            this.gameB2DConverter.convert(gameBoundary, word));
    }*/

    private getGameFromDatabase(id: number) {
        return this.gamesGateway.getGame(id)
    }
}