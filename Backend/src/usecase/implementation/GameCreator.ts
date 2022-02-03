import { BoundaryGame } from '../api/BoundaryGame';

import GameCreatorInterface from '../api/GameCreationInterface';
import WordsGateway from '../../gateway/api/WordsGateway';
import GamesGateway from '../../gateway/api/GamesGateway'

export class GameCreator implements GameCreatorInterface {
    private readonly gamesGateway: GamesGateway;
    private readonly wordsGateway: WordsGateway;

    constructor(wordsGateway: WordsGateway, gamesGateway: GamesGateway) {
        this.wordsGateway = wordsGateway;
        this.gamesGateway = gamesGateway;
    }

    createGame(): BoundaryGame {
        // sitas usecase galetu matyt domain/Game ?
        return new BoundaryGame()
    }
}