export class ViewGuess {
  readonly gameId: number;
  readonly guessingLetter: string;

  constructor(gameId: number, guessingLetter: string) {
    this.gameId = gameId;
    this.guessingLetter = guessingLetter;
  }
}
