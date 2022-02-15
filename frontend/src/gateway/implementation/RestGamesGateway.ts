import { Game } from "domain/Game";
import { Client } from "gateway/api/Client";
import { GamesGateway } from "gateway/api/GamesGateway";
import { Observable } from "rxjs";
import { CREATE_GAME_PATH } from "../../constant/RestConstants";

export class GamesAPI implements GamesGateway {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  createGame(): Observable<Game> {
    return this.client.post<Game>(CREATE_GAME_PATH);
  }
}
