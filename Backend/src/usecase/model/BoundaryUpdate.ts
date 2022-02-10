export class BoundaryUpdate {
    private readonly id: number;
    private readonly guessingLetter: string;

    constructor(id: number, guessingLetter: string) {
        this.id = id;
        this.guessingLetter =guessingLetter;
    }

    getId(): number {
        return this.id;
    }

    getGuessingLetter(): string{
        return this.guessingLetter;
    }
}