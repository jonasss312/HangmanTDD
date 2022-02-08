import GamesGateway from '../../gateway/api/GamesGateway';
import UpdateGameUseCase from '../api/UpdateGameUseCase'

import { Game } from '../../domain/Game';
import { BoundaryGame } from '../model/BoundaryGame';
import { GameD2BConverter } from './GameD2BConverter';

export class UpdateGameInteractor implements UpdateGameUseCase {
    private readonly gamesGateway: GamesGateway;
    private readonly gameD2BConverter: GameD2BConverter;

    constructor(gamesGateway: GamesGateway, gameD2BConverter : GameD2BConverter) {
        this.gamesGateway = gamesGateway;
        this.gameD2BConverter = gameD2BConverter;
    }

    upsertGame(gameBoundary: BoundaryGame): BoundaryGame {
        const foundGame = this.gamesGateway.getGame(gameBoundary.getId())
        if (this.gameExists(foundGame)) {
            return this.gameD2BConverter.convert(this.updateGame(gameBoundary, foundGame));
        }
        else {
            throw new Error(`No such game id: ${gameBoundary.getId()}`);
        }
    }

    private gameExists(game:Game):Boolean{
        return game.getId() > 0
    }

    private updateGame(gameBoundary: BoundaryGame, foundGame: Game): Game {
        const [guessedLetters, wrongLetters] = this.checkGuessingLetter(gameBoundary, foundGame.getWord());
        const updatedGame = new Game(gameBoundary.getId(), guessedLetters, wrongLetters, foundGame.getWord());
        this.gamesGateway.upsertGame(updatedGame);
        return updatedGame;
    }

    private checkGuessingLetter(game: BoundaryGame, word: string): [string[], string[]] {
        let guessedLetters = game.getGuessedLetters();
        let wrongLetters = game.getWrongLetters();
        if (word.includes(game.getGuessingLetter()))
            guessedLetters = this.appendLetterToArray(guessedLetters, game.getGuessingLetter());
        else
            wrongLetters = this.appendLetterToArray(wrongLetters, game.getGuessingLetter());
        return [guessedLetters, wrongLetters];
    }
    private appendLetterToArray(letters: string[], letter:string): string[] {
        if (this.letterIsNotInArray(letters, letter))
            letters.push(letter);
        return letters;
    }

    private letterIsNotInArray(letters: string[], letter: string) {
        return letters.indexOf(letter) < 0
    }

}