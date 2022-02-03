import {GamesStorage} from './GamesInMemmory'
import {Game} from '../../domain/Game'

let storage =new GamesStorage();
const game = new Game(1,[],[],"", "", 0);

describe("GamesStorage", () => {
    test("Can add game", () => {
      storage.addGame(game);
      expect(storage.getGames()).toContain(game);
    });

    test("Can get game by id", () => {
        const foundGame = storage.getGame(1);
        expect(foundGame).toEqual(game);
    });
    
    test("Can upsert game by id" , () =>{
        storage.addGame(game);
        const updatedGame = new Game(1,["a"],["b"],"cvbn", "####", 0);
        storage.upsertGame(1, updatedGame);
        expect(storage.getGame(1)).toEqual(updatedGame);
    });
  });