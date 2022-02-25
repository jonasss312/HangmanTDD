import { ViewGame } from "controller/model/ViewGame";
import { ViewGuess } from "controller/model/ViewGuess";
import useControllerContext from "../context/useControllerContext";
import useCeateObserver from "../observer/useCreateObserver";

export default function useLetter(
  setGameCallBack: (game: ViewGame | undefined) => void
): (game: ViewGuess) => void {
  const guessLetterController = useControllerContext().guessLetterController;
  const observer = useCeateObserver(setGameCallBack);

  const updatedGame = (guess: ViewGuess) => {
    guessLetterController.guessLetter(guess).subscribe(observer);
  };

  return updatedGame;
}
