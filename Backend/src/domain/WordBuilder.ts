export class WordBuilder {

    private readonly word: string;

    constructor(word: string) {
        this.word = word;
    }

    hideWord(): string {
        return Array.from(this.word).map(letter => {
            return this.isWhiteSpace(letter)  ? '_' : '#';
        }).join('');
    }

    updateHiddenWord(guessingLetter: string): string {
        return Array.from(this.word).map(letter => {
            return this.isWhiteSpace(letter) ? '_' : letter === guessingLetter ? letter : '#';
        }).join('');
    }

    private isWhiteSpace(letter: string) : Boolean {
        return letter === ' ' ? true : false;
    }
}