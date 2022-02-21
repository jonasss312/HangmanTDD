import { GuessRequest } from "controller/model/GuessRequest";
import { ViewGame } from "controller/model/ViewGame";
import { map, Observable } from "rxjs";
import { GuessLetterUseCase } from "usecase/api/GuessLetterUseCase";
import { GameB2VConverter } from "./GameB2VConverter";
import { GuessR2GConverter } from "./GuessR2GConverter";

export class GuessLetterController {
  private readonly guessLetterUseCase: GuessLetterUseCase;
  private readonly gameB2VConverter: GameB2VConverter;
  private readonly guessR2GConverter: GuessR2GConverter;

  constructor(
    guessLetterUseCase: GuessLetterUseCase,
    gameB2VConverter: GameB2VConverter,
    guessR2GConverter: GuessR2GConverter
  ) {
    this.guessLetterUseCase = guessLetterUseCase;
    this.gameB2VConverter = gameB2VConverter;
    this.guessR2GConverter = guessR2GConverter;
  }

  guessLetter(guessRequest: GuessRequest): Observable<ViewGame> {
    return this.guessLetterUseCase
      .guessLetter(this.guessR2GConverter.convert(guessRequest))
      .pipe(map((data) => this.gameB2VConverter.convert(data)));
  }
}
