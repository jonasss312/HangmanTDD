export class RestGame {
    private id: number
    private guessedLetters : string[]
    private wrongLetters :string[]
    private hiddenWord : string
    private guesses : number
    private status: string 

    constructor(id: number, guessedLetters : string[], wrongLetters :string[], hiddenWord : string, guesses : number, status: string) {
      this.id = id;
      this.guessedLetters = guessedLetters;
      this.wrongLetters = wrongLetters;
      this.hiddenWord = hiddenWord;
      this.guesses = guesses;
      this.status = status;
    }
  }