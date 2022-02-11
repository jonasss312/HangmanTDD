import { Game } from "domain/Game";
import { Observable } from "rxjs";

export interface GetNewGameUseCase {
  getGame(): Observable<Game>;
}
