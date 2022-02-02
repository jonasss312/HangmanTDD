import { sampleFunction } from '../src/Models/index';

describe("This is a simple test", () => {
  test("Check the sampleFunction function", () => {
    expect(sampleFunction("hello")).toEqual("hellohello");
  });
});