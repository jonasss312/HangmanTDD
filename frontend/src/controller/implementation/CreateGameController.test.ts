import { CreateGameController } from "./CreateGameController";
import { getObserverTemplate } from "../../constant/getObserverTemplate";
import { ViewGame } from "../model/ViewGame";
import { GameB2VConverter } from "./GameB2VConverter";
import { GetNewGameUseCase } from "../../usecase/api/GetNewGameUseCase";
import { mock, MockProxy } from "jest-mock-extended";
import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { of } from "rxjs";

describe("CreateGameController", () => {
  let createGameController: CreateGameController;
  let getNewGameUseCase: MockProxy<GetNewGameUseCase>;
  let gameB2VConverter: MockProxy<GameB2VConverter>;
  beforeEach(() => {
    getNewGameUseCase = mock<GetNewGameUseCase>();
    gameB2VConverter = mock<GameB2VConverter>();
    createGameController = new CreateGameController(
      getNewGameUseCase,
      gameB2VConverter
    );
  });

  it("Can get new game", (done) => {
    const gameView = new ViewGame(1, [], [], "____", 0, "IN_PROGRESS");
    const gameBoundary = new BoundaryGame(1, [], [], "____", 0, "IN_PROGRESS");

    getNewGameUseCase.getGame.mockReturnValue(of(gameBoundary));
    gameB2VConverter.convert.mockReturnValue(gameView);

    const observer = getObserverTemplate(done);
    observer.next = (game: ViewGame) => {
      expect(getNewGameUseCase.getGame).toBeCalled();
      expect(gameB2VConverter.convert).toBeCalledWith(gameBoundary);
      expect(game).toStrictEqual(gameView);
    };

    createGameController.createNewGame().subscribe(observer);
  });
});
