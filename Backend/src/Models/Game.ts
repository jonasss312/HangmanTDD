export class Game{
  private readonly id: number;
  guessedLetters = []
  wrongLetters = []
  word = ''
  hiddenWord = ''
  guesses = 0
  won = false

  constructor(id: number){
    this.id=id;
  }
}