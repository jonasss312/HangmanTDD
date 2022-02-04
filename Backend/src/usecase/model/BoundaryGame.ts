export class BoundaryGame {
    private readonly id: number;
    private readonly guessedLetters: string[];
    private readonly wrongLetters: string[];
    private readonly hiddenWord: string;

    constructor(id: number, guessedLetters: string[], wrongLetters: string[],
        hiddenWord: string) {
        this.id = id;
        this.guessedLetters = guessedLetters;
        this.wrongLetters = wrongLetters;
        this.hiddenWord = hiddenWord;
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
}