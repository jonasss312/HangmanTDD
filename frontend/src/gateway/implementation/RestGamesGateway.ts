import { Game } from "domain/Game";
import { Guess } from "domain/Guess";
import { Client } from "gateway/api/Client";
import { GamesGateway } from "gateway/api/GamesGateway";
import { Observable } from "rxjs";
import { GAMES_PATH } from "../../constant/RestConstants";

export class RestGamesGateway implements GamesGateway {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  createGame(): Observable<Game> {
    return this.client.post<Game>(GAMES_PATH);
  }

  guessLetter(guess: Guess): Observable<Game> {
    return this.client.patch<Game>(GAMES_PATH + "/" + guess.gameId, { id: guess.gameId, guessingLetter: guess.guessingLetter });
  }
}
