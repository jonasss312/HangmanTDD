import { Game } from "domain/Game";
import { Observable } from "rxjs";

export interface GamesGateway {
  createGame(): Observable<Game | undefined>;
}
