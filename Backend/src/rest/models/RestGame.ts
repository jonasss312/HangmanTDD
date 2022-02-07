import { GameStatus } from "./GameStatus";

export interface RestGame {
    id: number
    guessedLetters : string[]
    wrongLetters :string[]
    hiddenWord : string
    guessingLetter : string
    guesses : number
    status: GameStatus 
  }