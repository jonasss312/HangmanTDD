import { Game } from "domain/Game";
import { Guess } from "domain/Guess";
import { Observable } from "rxjs";

export interface GamesGateway {
  createGame(): Observable<Game>;
  guessLetter(guess: Guess): Observable<Game>;
}
