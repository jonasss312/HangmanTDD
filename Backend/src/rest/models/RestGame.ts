export interface RestGame {
    id: number
    guessedLetters : string[]
    wrongLetters :string[]
    hiddenWord : string
    guessingLetter : string
    guesses : number
    status: string 
  }