import { GameStatus } from './GameStatus'

export class Game {
    private readonly id: number;
    private readonly guessedLetters: string[];
    private readonly wrongLetters: string[];
    private readonly word: string;
    private readonly hiddenWord: string;
    private readonly guesses: number;
    private readonly status: GameStatus;

    constructor(id: number, guessedLetters: string[], wrongLetters: string[],
        word: string) {
        this.id = id;
        this.guessedLetters = guessedLetters;
        this.wrongLetters = wrongLetters;
        this.word = word.toUpperCase();
        this.hiddenWord = this.hideWord();
        this.guesses = this.getGuessesCount();
        this.status = this.decideGameStatus();
    }

    private getGuessesCount(): number {
        return this.guessedLetters.length + this.wrongLetters.length;
    }

    private hideWord(): string {
        return Array.from(this.word).map(letter => {
            if (this.isGuessedLetter(letter))
                return letter
            return this.isWhiteSpace(letter) ? ' ' : '#'
        }).join('');
    }

    private isGuessedLetter(letter: string) {
        return this.guessedLetters.indexOf(letter) > -1;
    }

    private isWhiteSpace(letter: string): Boolean {
        return letter === ' ' ? true : false;
    }

    private decideGameStatus() {
        if (this.thereIsNoMoreHiddenLetters())
            return GameStatus.Won;
        else
            return this.wasGuessedTenTimesWrongly() ? GameStatus.Lost : GameStatus.InProgress
    }

    private thereIsNoMoreHiddenLetters(): Boolean {
        return !this.hiddenWord.includes("#")
    }

    private wasGuessedTenTimesWrongly(): Boolean {
        return this.wrongLetters.length === 10
    }

    getStatus(): GameStatus {
        return this.status;
    }

    getId(): number {
        return this.id;
    }

    getHiddenWord(): string {
        return this.hiddenWord;
    }

    getGuessedLetters(): string[] {
        return this.guessedLetters;
    }

    getWrongLetters(): string[] {
        return this.wrongLetters;
    }

    getGuesses(): number {
        return this.guesses;
    }

    getWord(): string {
        return this.word;
    }
}

