import { WordGenerator } from '../src/Models/WordGenerator';

//Setup
let testFileName :string = '../../testWords.txt';
let wordGenerator : WordGenerator = new WordGenerator(testFileName);

describe("WordReader", () => {
  test("Can get random word", () => {
    let expectedResult : string[] = ["testing", "words", "guess me"];
    let result : string = wordGenerator.getWords()
    expect(expectedResult).toContain(result);
  });
});