import { Game } from "../../domain/Game";
import { Client } from "../api/Client";
import { mock, MockProxy } from "jest-mock-extended";
import { Observable, of } from "rxjs";
import { RestGamesGateway } from "./RestGamesGateway";
import { SERVER_URL } from "../../constant/RestConstants";
import { getObserverTemplate } from "../../constant/getObserverTemplate";
import { Guess } from "domain/Guess";

describe("RestGamesGateway", () => {
  let restGamesGateway: RestGamesGateway;
  let client: MockProxy<Client>;

  beforeEach(() => {
    client = mock<Client>();
    restGamesGateway = new RestGamesGateway(client);
  });

  it("Can get new game", (done) => {
    const newGame = new Game(1, [], [], "____", 0, "IN_PROGRESS");

    client.post.mockReturnValue(of(newGame));

    const observableGame: Observable<Game> = restGamesGateway.createGame();

    const onNext = (game: Game) => {
      expect(client.post).toBeCalledWith(SERVER_URL);
      expect(game).toEqual(newGame);
    };
    const observer = getObserverTemplate(done, onNext);

    observableGame.subscribe(observer);
  });

  it("Can guess letter", (done) => {
    const updatedGame = new Game(1, ["T"], [], "T__T", 0, "IN_PROGRESS");
    const guess = new Guess(1, "T");

    client.patch.mockReturnValue(of(updatedGame));

    const observableGame: Observable<Game> =
      restGamesGateway.guessLetter(guess);

    const onNext = (game: Game) => {
      expect(client.patch).toBeCalledWith(SERVER_URL, guess);
      expect(game).toEqual(updatedGame);
    };
    const observer = getObserverTemplate(done, onNext);

    observableGame.subscribe(observer);
  });
});
