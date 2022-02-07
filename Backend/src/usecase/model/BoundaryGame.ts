import { throws } from "assert";
import { GameStatus } from "../../domain/GameStatus";

export class BoundaryGame {
    private readonly id: number;
    private readonly guessedLetters: string[];
    private readonly wrongLetters: string[];
    private readonly hiddenWord: string;
    private readonly guessingLetter: string;
    private readonly guesses: number;
    private readonly status: GameStatus;

    constructor(id: number, guessedLetters: string[], wrongLetters: string[],
        hiddenWord: string, guessingLetter: string, guesses:number, status: GameStatus) {
        this.id = id;
        this.guessedLetters = guessedLetters;
        this.wrongLetters = wrongLetters;
        this.hiddenWord = hiddenWord;
        this.guessingLetter =guessingLetter;
        this.status=status;
        this.guesses=guesses;
    }

    getId(): number {
        return this.id;
    }

    getGuessedLetters(): string[] {
        return this.guessedLetters;
    }

    getWrongLetters(): string[] {
        return this.wrongLetters;
    }

    getHiddenWord(): string {
        return this.hiddenWord;
    }

    getGuessingLetter(): string{
        return this.guessingLetter;
    }

    getStatus(): GameStatus {
        return this.status;
    }

    getGuesses(): number {
        return this.guesses;
    }
}