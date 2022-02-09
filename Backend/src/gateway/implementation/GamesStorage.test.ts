import { GamesStorage } from './GamesStorage'
import { Game } from '../../domain/Game'

const GAME = new Game(1, [], [], "");


describe("GamesStorage", () => {
  let storage = new GamesStorage();

  beforeEach(() => {
    storage = new GamesStorage();
  })

  test("Can add game", () => {
    storage.addGame(GAME);
    expect(storage.getGames()).toContain(GAME);
  });

  test("Can get game by id", () => {
    storage.addGame(GAME);
    const foundGame = storage.getGame(1);
    expect(foundGame).toEqual(GAME);
  });

  test("Create empty game if can not get game by id", () => {
    const foundGame = storage.getGame(1);
    expect(foundGame).toEqual(new Game(0, [], [], ""));
  });

  test("Can upsert game by id", () => {
    storage.addGame(GAME);
    const updatedGame = new Game(1, ["a"], ["b"], "cvbn");
    storage.upsertGame(updatedGame);
    expect(storage.getGame(1)).toEqual(updatedGame);
  });

  test("Can upsert game by id if game does not exist", () => {
    const gameId = 1
    const updatedGame = new Game(gameId, ["a"], ["b"], "cvbn");
    storage.upsertGame(updatedGame);
    expect(storage.getGame(gameId)).toEqual(updatedGame);
  });

  test("Can generate new game id", () => {
    storage.addGame(GAME);
    const expectedId = 2;
    const resultId = storage.generateId();
    expect(expectedId).toEqual(resultId);
  });
});