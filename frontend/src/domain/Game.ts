export class Game {
  readonly id: number;
  readonly guessedLetters: string[];
  readonly wrongLetters: string[];
  readonly hiddenWord: string;
  readonly guesses: number;
  readonly status: string;

  constructor(
    id: number,
    guessedLetters: string[],
    wrongLetters: string[],
    hiddenWord: string,
    guesses: number,
    status: string
  ) {
    this.id = id;
    this.guessedLetters = guessedLetters;
    this.wrongLetters = wrongLetters;
    this.hiddenWord = hiddenWord;
    this.guesses = guesses;
    this.status = status;
  }
}
