import { Guess } from "domain/Guess";
import { GamesGateway } from "gateway/api/GamesGateway";
import { map, Observable } from "rxjs";
import { GuessLetterUseCase } from "usecase/api/GuessLetterUseCase";
import { BoundaryGame } from "usecase/model/BoundaryGame";
import { GameD2BConverter } from "./GameD2BConverter";

export class GuessLetterInteractor implements GuessLetterUseCase {
  private readonly gamesGW: GamesGateway;
  private readonly gameD2BConverter: GameD2BConverter;

  constructor(gamesGW: GamesGateway, gameD2BConverter: GameD2BConverter) {
    this.gamesGW = gamesGW;
    this.gameD2BConverter = gameD2BConverter;
  }

  guessLetter(guess: Guess): Observable<BoundaryGame> {
    return this.gamesGW
      .guessLetter(guess)
      .pipe(map((data) => this.gameD2BConverter.convert(data)));
  }
}
