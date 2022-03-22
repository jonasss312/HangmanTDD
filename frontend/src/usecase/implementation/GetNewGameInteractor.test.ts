import { Game } from "../../domain/Game";
import { GamesGateway } from "../../gateway/api/GamesGateway";
import { mock, MockProxy } from "jest-mock-extended";
import { Observable, of } from "rxjs";
import { BoundaryGame } from "../model/BoundaryGame";
import { GameD2BConverter } from "./GameD2BConverter";
import { GetNewGameInteractor } from "./GetNewGameInteractor";
import { getObserverTemplate } from "../../constant/getObserverTemplate";

describe("GetNewGameInteractor", () => {
  let getNewGameInteractor: GetNewGameInteractor;
  let gamesGW: MockProxy<GamesGateway>;
  let gameD2BConverter: MockProxy<GameD2BConverter>;

  beforeEach(() => {
    gamesGW = mock<GamesGateway>();
    gameD2BConverter = mock<GameD2BConverter>();
    getNewGameInteractor = new GetNewGameInteractor(gamesGW, gameD2BConverter);
  });

  it("Can get new game", (done) => {
    const newGame = new Game(1, [], [], "____", 0, "IN_PROGRESS");
    const observableNewGame$: Observable<Game> = of(newGame);
    const newGameBoundary = new BoundaryGame(
      1,
      [],
      [],
      "____",
      0,
      "IN_PROGRESS"
    );

    gamesGW.createGame.mockReturnValue(observableNewGame$);
    gameD2BConverter.convert.mockReturnValue(newGameBoundary);

    const onNext = (game: BoundaryGame) => {
      expect(game).toStrictEqual(newGameBoundary);
      expect(gamesGW.createGame).toBeCalled();
      expect(gameD2BConverter.convert).toBeCalledWith(newGame);
    };
    const observer = getObserverTemplate(done, onNext);

    getNewGameInteractor.getGame().subscribe(observer);
  });
});
