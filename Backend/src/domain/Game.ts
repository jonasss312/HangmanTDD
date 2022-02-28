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
        this.guesses = this.getGuessesCount();
        this.status = this.decideGameStatus();
        this.hiddenWord = this.hideOrRevealWord();
    }

    private getGuessesCount(): number {
        return this.guessedLetters.length + this.wrongLetters.length;
    }

    private hideOrRevealWord(): string {
        if (this.status === GameStatus.InProgress)
            return this.hideWord();
        return this.word;
    }

    private hideWord(): string {
        return Array.from(this.word).map(letter => {
            if (this.isGuessedLetter(letter))
                return letter
            return this.isWhiteSpace(letter) ? ' ' : '_'
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
            return this.atLeast10WrongGuesses() ? GameStatus.Lost : GameStatus.InProgress
    }

    private thereIsNoMoreHiddenLetters(): Boolean {
        return !this.hideWord().includes("_")
    }

    private atLeast10WrongGuesses(): Boolean {
        return this.wrongLetters.length >= 10
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

