import { GameStatus } from "./GameStatus";

export interface GameDto {
    id: number
    guessedLetters : string[]
    wrongLetters :string[]
    hiddenWord : string
    guessingLetter : string
    guesses : number
    status: GameStatus 
  }