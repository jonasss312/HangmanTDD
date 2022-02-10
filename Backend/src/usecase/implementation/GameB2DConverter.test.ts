import { GameB2DConverter} from '../implementation/GameB2DConverter'
import { Game } from '../../domain/Game'
import { BoundaryGame } from '../model/BoundaryGame';
import { GameStatus } from '../../domain/GameStatus';

let gameB2DConverter: GameB2DConverter;

beforeEach(() => {
    gameB2DConverter = new GameB2DConverter();
})

describe("GameB2DConverter", () => {
    test("Can transfer attributes", () => {
        const word = "TEST"
        const gameBoundary = new BoundaryGame(1, ["a", "b"], ["c", "d"], "####", 4, GameStatus.InProgress);
        const game : Game = gameB2DConverter.convert(gameBoundary, word);

        expect(game.getId()).toEqual(gameBoundary.getId());
        expect(game.getGuessedLetters()).toEqual(gameBoundary.getGuessedLetters());
        expect(game.getWrongLetters()).toEqual(gameBoundary.getWrongLetters());
        expect(game.getHiddenWord()).toEqual(gameBoundary.getHiddenWord());
        expect(game.getWord()).toEqual(word);
    });
});