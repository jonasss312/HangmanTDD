import { WordBuilder } from './WordBuilder';

let testWord: string = 'test word'
let wordBuilder: WordBuilder = new WordBuilder(testWord);

let expectedResult: string;
let result: string;

describe("WordBuilder", () => {
    test("Can hide word", () => {
        expectedResult = "####_####";
        result = wordBuilder.hideWord()
        expect(result).toEqual(expectedResult);
    });

    test("Can update hidden word", () => {
        let letter : string = "t"
        expectedResult = "t##t_####"
        result = wordBuilder.updateHiddenWord(letter)
        expect(result).toEqual(expectedResult)
    });
});