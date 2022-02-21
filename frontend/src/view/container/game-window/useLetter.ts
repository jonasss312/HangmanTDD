import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { ViewGame } from "controller/model/ViewGame";
import { ViewGuess } from "controller/model/ViewGuess";

export default function useLetter(
  guess: ViewGuess,
  guessLetterController: GuessLetterController,
  setGameCallBack: (game: ViewGame | undefined) => void
): () => void {
  const updatedGame = () =>
    guessLetterController.guessLetter(guess).subscribe(setGameCallBack);

  return updatedGame;
}
