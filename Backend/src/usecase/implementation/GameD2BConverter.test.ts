import { GameD2BConverter } from '../implementation/GameD2BConverter'
import { Game } from '../../domain/Game'
import { BoundaryGame } from '../model/BoundaryGame';

let gameD2BConverter: GameD2BConverter;

beforeEach(() => {
    gameD2BConverter = new GameD2BConverter();
})

describe("GameCreator", () => {
    test("Can transfer attributes", () => {
        const game = new Game(1, ["a", "b"], ["c", "d"], "test");
        const boudaryGame : BoundaryGame = gameD2BConverter.convert(game);

        expect(boudaryGame.getId()).toEqual(game.getId())
        expect(boudaryGame.getGuessedLetters()).toEqual(game.getGuessedLetters())
        expect(boudaryGame.getWrongLetters()).toEqual(game.getWrongLetters())
        expect(boudaryGame.getHiddenWord()).toEqual(game.getHiddenWord())
    });
});