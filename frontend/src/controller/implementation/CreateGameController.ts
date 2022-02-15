import { map, Observable } from "rxjs";
import { GetNewGameUseCase } from "usecase/api/GetNewGameUseCase";
import { ViewGame } from "../model/ViewGame";
import { GameB2VConverter } from "./GameB2VConverter";

export class CreateGameController {
  private readonly getNewGameUseCase: GetNewGameUseCase;
  private readonly gameB2VConverter: GameB2VConverter;

  constructor(
    getNewGameUseCase: GetNewGameUseCase,
    gameB2VConverter: GameB2VConverter
  ) {
    this.getNewGameUseCase = getNewGameUseCase;
    this.gameB2VConverter = gameB2VConverter;
  }

  createNewGame(): Observable<ViewGame> {
    return this.getNewGameUseCase
      .getGame()
      .pipe(map((data) => this.gameB2VConverter.convert(data)));
  }
}
