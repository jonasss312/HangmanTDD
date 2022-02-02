export class Game {
    private readonly id: number;
    private readonly guessedLetters: string[];
    private readonly wrongLetters: string[];
    private readonly word: string;
    private readonly hiddenWord: string;
    private readonly guesses: number;
    private readonly won: Boolean;

    constructor(id: number, guessedLetters: string[], wrongLetters: string[],
        word: string, hiddenWord: string, guesses: number, won: Boolean) {
        this.id = id;
        this.guessedLetters = guessedLetters;
        this.wrongLetters = wrongLetters;
        this.word = word;
        this.hiddenWord = hiddenWord;
        this.guesses = guesses;
        this.won = won;
    }
}

//reikes boundary