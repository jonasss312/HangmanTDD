import { Game } from './Game'
import { GameStatus } from './GameStatus'

const TEST_WORD = "TESTING WITH A SPACE";

describe("Game", () => {
    function createGame(correctLetters: string[], wrongLetters: string[]): Game {
        return new Game(1, correctLetters, wrongLetters, TEST_WORD);
    }

    test("Can guess one letter", () => {
        const game = createGame(["T"], []);
        expect(game.getHiddenWord()).toEqual("T__T___ __T_ _ _____");
        expect(game.getStatus()).toEqual(GameStatus.InProgress);
        expect(game.getGuesses()).toEqual(1);
    })

    test("Can check if game is in progress", () => {
        const game = createGame(["T"], []);
        expect(game.getStatus()).toEqual(GameStatus.InProgress);
    })

    test("Can check if game won", () => {
        const guessedAllWordLetters =
            Array.from(TEST_WORD).filter(letter => letter != ' ');
        const game = createGame(guessedAllWordLetters, []);
        expect(game.getStatus()).toEqual(GameStatus.Won);
    });

    test("Can check if game is lost and reveal word", () => {
        const game = createGame([], ["t", "t", "t", "t", "t", "t", "t", "t", "t", "t"]);
        expect(game.getStatus()).toEqual(GameStatus.Lost);
        expect(game.getHiddenWord()).toEqual(TEST_WORD);
    });

});
