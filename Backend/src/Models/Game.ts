export class Game {
    private readonly id: number;
    private readonly guessedLetters: String[];
    private readonly wrongLetters: String[];
    private readonly word: String;
    private readonly hiddenWord: String;
    private readonly guesses: number;
    private readonly won: Boolean;

    constructor(id: number, guessedLetters: String[], wrongLetters: String[],
        word: String, hiddenWord: String, guesses: number, won: Boolean) {
        this.id = id;
        this.guessedLetters = guessedLetters;
        this.wrongLetters = wrongLetters;
        this.word = word;
        this.hiddenWord = hiddenWord;
        this.guesses = guesses;
        this.won = won;
    }
}