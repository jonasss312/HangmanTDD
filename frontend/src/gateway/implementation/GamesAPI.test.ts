import { Game } from "domain/Game";
import { Client } from "gateway/api/Client";
import { Observable, of } from "rxjs";
import { GamesAPI } from "./GamesAPI";
import { mock, MockProxy } from "jest-mock-extended";

describe("GamesAPI", () => {
  let gamesAPI: GamesAPI;
  let client: MockProxy<Client>;

  beforeEach(() => {
    client = mock<Client>();
    gamesAPI = new GamesAPI(client);
  });

  it("Can get new game", () => {
    const newGame = new Game(1, [], [], "____", 0, "IN_PROGRESS");

    client.post.mockReturnValue(of(newGame));

    const observableGame: Observable<Game> = gamesAPI.createGame();

    observableGame.subscribe((game) => expect(game).toEqual(newGame));
  });
});
