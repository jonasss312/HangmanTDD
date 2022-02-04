import { GameD2BConverter } from '../implementation/GameD2BConverter'
import { Game } from '../../domain/Game'
import { BoundaryGame } from '../model/BoundaryGame';

const GAME_D2B_CONVERTER = new GameD2BConverter();

describe("GameCreator", () => {
    test("Can trasnfer attributes", () => {
        const game = new Game(1, ["a", "b"], ["c", "d"], "test");
        const boudaryGame : BoundaryGame = GAME_D2B_CONVERTER.convert(game);

        expect(boudaryGame.getId()).toEqual(game.getId())
        expect(boudaryGame.getGuessedLetters()).toEqual(game.getGuessedLetters())
        expect(boudaryGame.getWrongLetters()).toEqual(game.getWrongLetters())
        expect(boudaryGame.getHiddenWord()).toEqual(game.getHiddenWord())
    });
});