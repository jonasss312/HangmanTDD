import { BoundaryGame } from "../../usecase/model/BoundaryGame";
import { RestGame } from "../models/RestGame";
import { GameB2RConverter } from "./GameB2RConverter";

describe("GameB2RConverter", () => {
    let gameB2RConverter: GameB2RConverter

    beforeAll(() => {
        gameB2RConverter = new GameB2RConverter()
    })
    
    it("can transfer attributes", () => {
        const requestingToConvertGameBoundary = new BoundaryGame(1, ["A", "D"], ["C", "B"], "####", 4, "IN_PROGRESS");
        const expectedRestGameModel = new RestGame(1, ["A", "D"], ["C", "B"], "####", 4, "IN_PROGRESS")

        const resultRestGameModel = gameB2RConverter.convert(requestingToConvertGameBoundary);

        expect(resultRestGameModel).toEqual(expectedRestGameModel);
    });
});
