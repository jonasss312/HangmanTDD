import { Guess } from "domain/Guess";
import { Observable } from "rxjs";
import { BoundaryGame } from "usecase/model/BoundaryGame";

export interface GuessLetterUseCase {
    guessLetter(guess: Guess): Observable<BoundaryGame>;
}
