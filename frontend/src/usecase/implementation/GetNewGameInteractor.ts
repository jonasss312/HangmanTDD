import { Game } from "domain/Game";
import { GamesGateway } from "gateway/api/GamesGateway";
import { Observable } from "rxjs";
import { GetNewGameUseCase } from "usecase/api/GetNewGameUseCase";

export class GetNewGameInteractor implements GetNewGameUseCase {
  private readonly gamesGW: GamesGateway;

  constructor(gamesGW: GamesGateway) {
    this.gamesGW = gamesGW;
  }

  getGame(): Observable<Game> {
    return this.gamesGW.createGame();
  }
}
