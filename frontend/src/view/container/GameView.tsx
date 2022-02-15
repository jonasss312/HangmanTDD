import useCreateGame from "../../hook/useCreateGame";
import { CreateGameController } from "../../controller/implementation/CreateGameController";
import { ViewGame } from "../../controller/model/ViewGame";
import { GameStatusDisplay } from "../component/GameStatusDisplay";
import { GuessingLettersDisplay } from "view/component/GuessingLettersDisplay";

export function GameView(createGameController: CreateGameController) {
  const game: ViewGame | undefined = useCreateGame(createGameController);

  if (!game)
    return (
      <div>
        <h1>Cannot create game.</h1>
      </div>
    );

  const hiddenWord = (): JSX.Element => (
    <div>
      <text>{game.hiddenWord}</text>
    </div>
  );
  const guessesCount = (): JSX.Element => (
    <div>
      <text>Guesses: {game.guesses}</text>
    </div>
  );

  const renderGame = (game: ViewGame): JSX.Element => (
    <div>
      {hiddenWord()}

      <GuessingLettersDisplay
        guessedLetters={game.guessedLetters}
        wrongLetters={game.wrongLetters}
      />
      {guessesCount()}

      <GameStatusDisplay status={game.status} gameId={game.id} />
    </div>
  );

  return <>{renderGame(game)}</>;
}
