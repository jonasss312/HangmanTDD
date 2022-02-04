import { GameD2BConverter } from '../implementation/GameD2BConverter'
import { Game } from '../../domain/Game'
import { BoundaryGame } from '../model/BoundaryGame';

const gameD2BConverter = new GameD2BConverter();
const game = new Game(1, ["a", "b"], ["c", "d"], "test");

describe("GameCreator", () => {
    test("Can trasnfer attributes", () => {
        const boudaryGame : BoundaryGame = gameD2BConverter.convert(game);

        expect(boudaryGame.getId()).toEqual(game.getId())
        expect(boudaryGame.getGuessedLetters()).toEqual(game.getGuessedLetters())
        expect(boudaryGame.getWrongLetters()).toEqual(game.getWrongLetters())
        expect(boudaryGame.getHiddenWord()).toEqual(game.getHiddenWord())
    });
});