import { Game } from './Game'
import {GameStatus} from './GameStatus'

describe("Game", () => {
    function createGame(wrongLetters: string[], hiddenWord: string): Game {
        return new Game(1, [], wrongLetters, "testing with a space", hiddenWord, 0);
    }
    test("Can approve if game won", () => {
        let game = new Game(1,[],[],"testing with a space", "testing_with_a_space", 0);
        expect(game.getStatus()).toEqual("Won");
    });

    test("Can approve if game is lost", () => {
        let game = new Game(1,[],["a","a","a","a","a","a","a","a","a","a"],"testing with a space", "#######_###_#_#####", 0);
        expect(game.getStatus()).toEqual("Lost");
    });
});
