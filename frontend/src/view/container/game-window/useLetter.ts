import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { ViewGame } from "controller/model/ViewGame";
import { ViewGuess } from "controller/model/ViewGuess";

export default function useLetter(
    guessLetterController: GuessLetterController,
    setGameCallBack: (game: ViewGame | undefined) => void
): (game: ViewGuess) => void {
    const updatedGame = (guess: ViewGuess) =>
        guessLetterController.guessLetter(guess).subscribe(setGameCallBack);

    return updatedGame;
}
