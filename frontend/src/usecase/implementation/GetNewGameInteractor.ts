import { GamesGateway } from "gateway/api/GamesGateway";
import { map, Observable } from "rxjs";
import { GetNewGameUseCase } from "usecase/api/GetNewGameUseCase";
import { BoundaryGame } from "usecase/model/BoundaryGame";
import { GameD2BConverter } from "./GameD2BConverter";

export class GetNewGameInteractor implements GetNewGameUseCase {
  private readonly gamesGW: GamesGateway;
  private readonly gameD2BConverter: GameD2BConverter;

  constructor(gamesGW: GamesGateway, gameD2BConverter: GameD2BConverter) {
    this.gamesGW = gamesGW;
    this.gameD2BConverter = gameD2BConverter;
  }

  getGame(): Observable<BoundaryGame> {
    return this.gamesGW
      .createGame()
      .pipe(map((data) => this.gameD2BConverter.convert(data)));
  }
}
