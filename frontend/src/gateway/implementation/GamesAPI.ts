import { Game } from "domain/Game";
import { Client } from "gateway/api/Client";
import { GamesGateway } from "gateway/api/GamesGateway";
import { Observable } from "rxjs";

export class GamesAPI implements GamesGateway {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  createGame(): Observable<Game> {
    return this.client.post<Game>("/api/games");
  }
}
