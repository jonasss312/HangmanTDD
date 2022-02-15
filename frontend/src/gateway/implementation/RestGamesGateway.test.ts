import { Game } from "../../domain/Game";
import { Client } from "../api/Client";
import { mock, MockProxy } from "jest-mock-extended";
import { Observable, of } from "rxjs";
import { GamesAPI } from "./RestGamesGateway";
import { CREATE_GAME_PATH } from "../../constant/RestConstants";
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

    const onNext = (game: Game) => {
      expect(client.post).toBeCalledWith(CREATE_GAME_PATH);
      expect(game).toEqual(newGame);
    };
    const observer = getObserverTemplate(done, onNext);

    observableGame.subscribe(observer);
  });
});
