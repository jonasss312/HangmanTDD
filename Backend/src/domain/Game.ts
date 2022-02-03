export class Game {
    private readonly id: number;
    private readonly guessedLetters: string[];
    private readonly wrongLetters: string[];
    private readonly word: string;
    private readonly hiddenWord: string;
    private readonly guesses: number;
    private readonly status: string;

    constructor(id: number, guessedLetters: string[], wrongLetters: string[],
        word: string, hiddenWord: string, guesses: number) {
        this.id = id;
        this.guessedLetters = guessedLetters;
        this.wrongLetters = wrongLetters;
        this.word = word;
        this.hiddenWord = hiddenWord;
        this.guesses = guesses;
        this.status = this.decideGameStatus();
    }

    private decideGameStatus() {
        return this.thereIsNoMoreHiddenLetters() ?
            "Won" : this.wasGuessedTenTimesWrongly() ?
                "Lost" : "inProgress"
    }

    private thereIsNoMoreHiddenLetters(): Boolean {
        return !this.hiddenWord.includes("#") ? true : false
    }

    private wasGuessedTenTimesWrongly(): Boolean {
        return this.wrongLetters.length == 10 ? true : false
    }

    getGameStatus() {
        return this.status;
    }
}

//reikes boundary

