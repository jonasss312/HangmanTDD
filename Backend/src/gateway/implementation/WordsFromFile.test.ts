import { WordsFromFile } from './WordsFromFile';

const testFileName: string = '../../../testWords.txt';
const wordGenerator: WordsFromFile = new WordsFromFile(testFileName);

describe("WordReader", () => {
  test("Can get random word", () => {
    const expectedResult: string[] = ["testing", "words", "guess me"];
    const result: string = wordGenerator.loadWord();
    expect(expectedResult).toContain(result);
  });
});