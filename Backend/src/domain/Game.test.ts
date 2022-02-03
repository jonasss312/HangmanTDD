import { Game } from './Game'

describe("Game", () => {
    test("Can check if game won", () => {
        const game = createGame([], "testing_with_a_space")
        expect(game.getGameStatus()).toEqual("Won");
    });

    test("Can check if game is lost", () => {
        const game = createGame(["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"], "#######_###_#_#####");
        expect(game.getGameStatus()).toEqual("Lost");
    });
});

export function createGame(wrongLetters: string[], hiddenWord: string): Game {
    return new Game(1, [], wrongLetters, "testing with a space", hiddenWord, 0);
}
