import { WordsFromFile } from './WordsFromFile';

const TEST_FILE_NAME: string = '../../../testWords.txt';
const WORDS_FROM_FILE: WordsFromFile = new WordsFromFile(TEST_FILE_NAME);

describe("WordReader", () => {
  test("Can get random word", () => {
    const expectedResult: string[] = ["testing", "words", "guess me"];
    const result: string = WORDS_FROM_FILE.loadWord();
    expect(expectedResult).toContain(result);
  });
});