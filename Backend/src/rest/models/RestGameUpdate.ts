export class RestGameUpdate{
    private id : number;
    private guessingLetter: string;

    constructor(id:number, guessingLetter: string){
        this.id=id;
        this.guessingLetter=guessingLetter;
    }
}