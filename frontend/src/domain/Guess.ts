export class Game {
    readonly id: number;
    readonly guessingLetter: string;

    constructor(
        id: number,
        guessingLetter: string
    ) {
        this.id = id;
        this.guessingLetter = guessingLetter;
    }
}
