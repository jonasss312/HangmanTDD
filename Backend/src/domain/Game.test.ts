import { Game } from './Game'
import {GameStatus} from './GameStatus'

describe("Game", () => {
    function createGame(wrongLetters: string[], hiddenWord: string): Game {
        return new Game(1, [], wrongLetters, "testing with a space", hiddenWord, 0);
    }
    test("Can check if game won", () => {
        const game = createGame([], "testing_with_a_space");
        expect(game.getStatus()).toEqual(GameStatus.Won);
    });

    test("Can check if game is lost", () => {
        const game = createGame(["a","a","a","a","a","a","a","a","a","a"], "#######_###_#_#####");
        expect(game.getStatus()).toEqual(GameStatus.Lost);
    });
});
