import { BoundaryUpdate } from "../../usecase/model/BoundaryUpdate";
import { UpdateR2BConverter } from "./UpdateR2BConverter";

const MockExpressRequest = require('mock-express-request');

describe("UpdateR2BConverter", () => {
    let updateR2BConverter: UpdateR2BConverter

    beforeAll(() => {
        updateR2BConverter = new UpdateR2BConverter()
    })

    it("can transfer attributes", () => {
        const request = new MockExpressRequest({ body: { guessingLetter: "T" }, params: { id: 4 } });
        const expectedUpdateBoundary = new BoundaryUpdate(4, "T");

        const resultUpdateBoundary = updateR2BConverter.convert(request);

        expect(resultUpdateBoundary).toEqual(expectedUpdateBoundary);
    });
});
