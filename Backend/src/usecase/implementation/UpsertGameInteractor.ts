import GamesGateway from '../../gateway/api/GamesGateway';
import UpsertGameUseCase from '../api/UpsertGameUseCase'

import { Game } from '../../domain/Game';
import { BoundaryGame } from '../model/BoundaryGame';
import { GameD2BConverter } from './GameD2BConverter';
import { BoundaryUpdate } from '../model/BoundaryUpdate';

export class UpsertGameInteractor implements UpsertGameUseCase {
    private readonly gamesGateway: GamesGateway;
    private readonly gameD2BConverter: GameD2BConverter;

    constructor(gamesGateway: GamesGateway, gameD2BConverter: GameD2BConverter) {
        this.gamesGateway = gamesGateway;
        this.gameD2BConverter = gameD2BConverter;
    }

    upsertGame(updateGameBoundary: BoundaryUpdate): BoundaryGame {
        const foundGame = this.gamesGateway.getGame(updateGameBoundary.getId())
        if (this.gameExists(foundGame))
            return this.gameD2BConverter.convert(this.updateGame(updateGameBoundary, foundGame));
        throw new Error(`No such game id: ${updateGameBoundary.getId()}`);
    }

    private gameExists(game: Game): Boolean {
        return game.getId() > 0
    }

    private updateGame(updateGameBoundary: BoundaryUpdate, foundGame: Game): Game {
        const [guessedLetters, wrongLetters] = this.checkGuessingLetter(updateGameBoundary, foundGame);
        const updatedGame = new Game(updateGameBoundary.getId(), guessedLetters, wrongLetters, foundGame.getWord());
        this.gamesGateway.upsertGame(updatedGame);
        return updatedGame;
    }

    private checkGuessingLetter(boundary: BoundaryUpdate, foundGame: Game): [string[], string[]] {
        let guessedLetters: string[] = foundGame.getGuessedLetters();
        let wrongLetters: string[] = foundGame.getWrongLetters();
        if (foundGame.getWord().includes(boundary.getGuessingLetter()))
            guessedLetters = this.appendLetterToArray(guessedLetters, boundary.getGuessingLetter());
        else
            wrongLetters = this.appendLetterToArray(wrongLetters, boundary.getGuessingLetter());
        return [guessedLetters, wrongLetters];
    }
    private appendLetterToArray(letters: string[], letter: string): string[] {
        if (this.letterIsNotInArray(letters, letter))
            letters.push(letter);
        return letters;
    }

    private letterIsNotInArray(letters: string[], letter: string) {
        return letters.indexOf(letter) < 0
    }
}