import useCreateGame from "../../hook/useCreateGame";
import { CreateGameController } from "../../controller/implementation/CreateGameController";
import { ViewGame } from "../../controller/model/ViewGame";
import { GameStatusDsiplay } from "../component/GameStatusDsiplay";

export function GameView(createGameController: CreateGameController) {
  const game: ViewGame | undefined = useCreateGame(createGameController);

  const alphabet = Array.from(Array(26))
    .map((e, i) => i + 65)
    .map((x) => String.fromCharCode(x));

  function renderGame() {
    if (game != undefined)
      return (
        <div>
          <div>
            <text>{game.hiddenWord}</text>
          </div>
          <div>
            {alphabet.map((letter) => (
              <div>
                {game.guessedLetters.includes(letter) ||
                game.wrongLetters.includes(letter) ? (
                  <button disabled>{letter}</button>
                ) : (
                  <button>{letter}</button>
                )}
              </div>
            ))}
          </div>
          <div>
            <text>Guesses:</text>
            {game.guesses}
          </div>
          {GameStatusDsiplay(game)}
        </div>
      );
  }

  return <>{renderGame()}</>;
}
