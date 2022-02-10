export interface RestGame {
    id: number
    guessedLetters : string[]
    wrongLetters :string[]
    hiddenWord : string
    guesses : number
    status: string 
  }