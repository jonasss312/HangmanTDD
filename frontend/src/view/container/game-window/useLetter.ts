import { ViewGame } from "controller/model/ViewGame";
import { ViewGuess } from "controller/model/ViewGuess";
import useControllerContext from "./useControllerContext";

export default function useLetter(
  setGameCallBack: (game: ViewGame | undefined) => void
): (game: ViewGuess) => void {
  const guessLetterController = useControllerContext().guessLetterController;

  const updatedGame = (guess: ViewGuess) => {
    guessLetterController.guessLetter(guess).subscribe(setGameCallBack);
  };

  return updatedGame;
}
