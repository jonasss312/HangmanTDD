import { Game } from './Game'
import { GameStatus } from './GameStatus'

const testWord = "testing with a space";

describe("Game", () => {
    function createGame(correctLetters: string[], wrongLetters: string[]): Game {
        return new Game(1, correctLetters, wrongLetters, testWord);
    }

    test("Can guess one letter", () => {
        const game = createGame(["t"], []);
        expect(game.getHiddenWord()).toEqual("t##t### ##t# # #####");
        expect(game.getStatus()).toEqual(GameStatus.InProgress);
        expect(game.getGuesses()).toEqual(1);
    })

    test("Can check if game is in progress", () => {
        const game = createGame(["t"], []);
        expect(game.getStatus()).toEqual(GameStatus.InProgress);
    })

    test("Can check if game won", () => {
        const guessedAllWordLetters =
            Array.from(testWord).map(letter => {
                return letter;
            }).filter(letter => letter!= ' ');
        const game = createGame(["t", "e", "s", "c", "i", "n", "g", "w", "a", "s", "p", "h"], []);
        expect(game.getStatus()).toEqual(GameStatus.Won);
    });

    test("Can check if game is lost", () => {
        const game = createGame([], ["t", "t", "t", "t", "t", "t", "t", "t", "t", "t"]);
        expect(game.getStatus()).toEqual(GameStatus.Lost);
    });

});
