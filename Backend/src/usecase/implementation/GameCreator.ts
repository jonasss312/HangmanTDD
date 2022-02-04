import { BoundaryGame } from '../model/BoundaryGame';
import { Game } from '../../domain/Game';
import { GameD2BConverter } from './GameD2BConverter';

import WordsGateway from '../../gateway/api/WordsGateway';
import GamesGateway from '../../gateway/api/GamesGateway'
import CreateGameUseCase from '../api/GameCreationInterface';

export class CreateGameInteractor implements CreateGameUseCase {
    private readonly gamesGateway: GamesGateway;
    private readonly wordsGateway: WordsGateway;

    constructor(wordsGateway: WordsGateway, gamesGateway: GamesGateway) {
        this.wordsGateway = wordsGateway;
        this.gamesGateway = gamesGateway;
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

        return new GameD2BConverter().convert(newGame);
    }
}