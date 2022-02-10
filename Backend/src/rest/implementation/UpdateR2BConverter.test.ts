import { BoundaryUpdate } from "../../usecase/model/BoundaryUpdate";
import { UpdateR2BConverter } from "./UpdateR2BConverter";

const MockExpressRequest = require('mock-express-request');

describe("UpdateR2BConverter", () => {
    let updateR2BConverter: UpdateR2BConverter

    beforeAll(() => {
        updateR2BConverter = new UpdateR2BConverter()
    })

    it("can trasnfer attributes", () => {
        const request = new MockExpressRequest({ body: { id: 4, guessingLetter: "T" } });
        const expectedUpdateBoundary = new BoundaryUpdate(4, "T");

        const resultUpdateBoundary = updateR2BConverter.convert(request);

        expect(resultUpdateBoundary).toEqual(expectedUpdateBoundary);
    });
});
