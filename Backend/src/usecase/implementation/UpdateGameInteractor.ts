import { Game } from '../../domain/Game';
import GamesGateway from '../../gateway/api/GamesGateway';
import UpdateGameUseCase from '../api/UpdateGameUseCase'
import { BoundaryGame } from '../model/BoundaryGame';
import { GameD2BConverter } from './GameD2BConverter';

export class UpdateGameInteractor implements UpdateGameUseCase {
    private readonly gamesGateway: GamesGateway;
    private readonly gameD2BConverter: GameD2BConverter;

    constructor(gamesGateway: GamesGateway) {
        this.gamesGateway = gamesGateway;
        this.gameD2BConverter = new GameD2BConverter();
    }

    updateGame(gameBoundary: BoundaryGame): BoundaryGame {
        const foundGame = this.getGameFromDatabase(gameBoundary.getId())
        this.tryUpdateGameInDatabase(gameBoundary, foundGame.getWord())
        const updatedGame = this.getGameFromDatabase(gameBoundary.getId())
        return this.gameD2BConverter.convertGameToBoundary(updatedGame)
    }

    private tryUpdateGameInDatabase(gameBoundary: BoundaryGame, word: string) {
        this.gamesGateway.upsertGame(
            this.gameD2BConverter.convertBoundaryToGame(gameBoundary, word));
    }

    private getGameFromDatabase(id: number) {
        return this.gamesGateway.getGame(id)
    }
}