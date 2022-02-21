import { ViewGuessRequest } from "controller/model/ViewGuessRequest";
import { ViewGame } from "controller/model/ViewGame";
import { map, Observable } from "rxjs";
import { GuessLetterUseCase } from "usecase/api/GuessLetterUseCase";
import { GameB2VConverter } from "./GameB2VConverter";
import { GuessV2BConverter } from "./GuessV2BConverter";

export class GuessLetterController {
  private readonly guessLetterUseCase: GuessLetterUseCase;
  private readonly gameB2VConverter: GameB2VConverter;
  private readonly guessV2BConverter: GuessV2BConverter;

  constructor(
    guessLetterUseCase: GuessLetterUseCase,
    gameB2VConverter: GameB2VConverter,
    guessV2BConverter: GuessV2BConverter
  ) {
    this.guessLetterUseCase = guessLetterUseCase;
    this.gameB2VConverter = gameB2VConverter;
    this.guessV2BConverter = guessV2BConverter;
  }

  guessLetter(guessRequest: ViewGuessRequest): Observable<ViewGame> {
    return this.guessLetterUseCase
      .guessLetter(this.guessV2BConverter.convert(guessRequest))
      .pipe(map((data) => this.gameB2VConverter.convert(data)));
  }
}
