import { WordsFromFile } from './WordsFromFile';

let testFileName: string = '../../../testWords.txt';
let wordGenerator: WordsFromFile = new WordsFromFile(testFileName);

describe("WordReader", () => {
  test("Can get random word", () => {
    let expectedResult: string[] = ["testing", "words", "guess me"];
    let result: string = wordGenerator.getWord()
    expect(expectedResult).toContain(result);
  });
});