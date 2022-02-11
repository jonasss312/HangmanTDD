import { Game } from "domain/Game";
import { GamesGateway } from "gateway/api/GamesGateway";
import { mock, MockProxy } from "jest-mock-extended";
import { Observable, of } from "rxjs";
import { GetNewGameInteractor } from "./GetNewGameInteractor";

describe("GetNewGameInteractor", () => {
  let getNewGameInteractor: GetNewGameInteractor;
  let gamesGW: MockProxy<GamesGateway>;

  beforeEach(() => {
    gamesGW = mock<GamesGateway>();
    getNewGameInteractor = new GetNewGameInteractor(gamesGW);
  });

  it("Can get new game", () => {
    const newGame = new Game(1, [], [], "____", 0, "IN_PROGRESS");

    gamesGW.createGame.mockReturnValue(of(newGame));

    const observableGame: Observable<Game> = getNewGameInteractor.getGame();

    observableGame.subscribe((game) => expect(game).toEqual(newGame));
  });
});
