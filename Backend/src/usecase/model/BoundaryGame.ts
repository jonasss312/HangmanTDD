export class BoundaryGame {
    private readonly id: number;
    private readonly guessedLetters: string[];
    private readonly wrongLetters: string[];
    private readonly hiddenWord: string;
    private readonly guesses: number;
    private readonly status: string;

    constructor(id: number, guessedLetters: string[], wrongLetters: string[],
        hiddenWord: string, guesses:number, status: string) {
        this.id = id;
        this.guessedLetters = guessedLetters;
        this.wrongLetters = wrongLetters;
        this.hiddenWord = hiddenWord;
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

    getStatus(): string {
        return this.status;
    }

    getGuesses(): number {
        return this.guesses;
    }
}