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

  getStatus(): string {
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
}
