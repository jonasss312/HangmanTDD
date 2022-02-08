import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { RestGame } from "../models/RestGame";
import { GameB2RConverter } from "./GameB2RConverter";

let gameB2RConverter: GameB2RConverter

beforeAll(async () => {
    gameB2RConverter = new GameB2RConverter()
})

describe("GameB2RConverter", () => {
    it("can trasnfer attributes", async () => {
        const requestingToConvertGameBoundary = new BoundaryGame(1, ["A", "D"], ["C", "B"], "####", "", 4, "IN_PROGRESS");
        const expectedRestGameModel: RestGame = {
            id: 1,
            guessedLetters: ["A", "D"],
            wrongLetters: ["C", "B"],
            hiddenWord: "####",
            guesses: 4,
            status: "IN_PROGRESS"
        }

        const resultRestGameModel = gameB2RConverter.convert(requestingToConvertGameBoundary);

        expect(resultRestGameModel).toEqual(expectedRestGameModel);
    });
});
