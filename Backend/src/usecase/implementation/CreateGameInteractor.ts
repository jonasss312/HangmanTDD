import { BoundaryGame } from '../model/BoundaryGame';
import { Game } from '../../domain/Game';
import { GameD2BConverter } from './GameD2BConverter';

import WordsGateway from '../../gateway/api/WordsGateway';
import GamesGateway from '../../gateway/api/GamesGateway'
import CreateGameUseCase from '../api/CreateGameUseCase';

export class CreateGameInteractor implements CreateGameUseCase {
    private readonly gamesGateway: GamesGateway;
    private readonly wordsGateway: WordsGateway;
    private readonly gameD2BConverter : GameD2BConverter;

    constructor(wordsGateway: WordsGateway, gamesGateway: GamesGateway) {
        this.wordsGateway = wordsGateway;
        this.gamesGateway = gamesGateway;
        this.gameD2BConverter = new GameD2BConverter();
    }

    createGame(): BoundaryGame {
        const newGame =
            new Game(
                this.gamesGateway.generateId(),
                [],
                [],
                this.wordsGateway.loadWord()
            )
        this.gamesGateway.addGame(newGame);
        return this.gameD2BConverter.convert(newGame);
    }
}