import { Game } from "../../domain/Game";
import { Client } from "../../gateway/api/Client";
import { mock, MockProxy } from "jest-mock-extended";
import { Observable, of } from "rxjs";
import { GamesAPI } from "./GamesAPI";
import { CreateGameRoute } from "../../constant/RestConstants";
import { getObserverTemplate } from "../../constant/getObserverTemplate";

describe("GamesAPI", () => {
  let gamesAPI: GamesAPI;
  let client: MockProxy<Client>;

  beforeEach(() => {
    client = mock<Client>();
    gamesAPI = new GamesAPI(client);
  });

  it("Can get new game", (done) => {
    const newGame = new Game(1, [], [], "____", 0, "IN_PROGRESS");

    client.post.mockReturnValue(of(newGame));

    const observableGame: Observable<Game> = gamesAPI.createGame();

    const observer = getObserverTemplate(done);
    observer.next = (game) => {
      expect(client.post).toBeCalledWith(CreateGameRoute);
      expect(game).toEqual(newGame);
    };

    observableGame.subscribe(observer);
  });
});
