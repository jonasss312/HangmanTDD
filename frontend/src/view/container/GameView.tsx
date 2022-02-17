import { ViewGame } from "../../controller/model/ViewGame";
import { GameStatusDisplay } from "../component/GameStatusDisplay";
import { GuessingLettersDisplay } from "view/component/GuessingLettersDisplay";
import React from "react";

interface Props {
  game: ViewGame | undefined;
}

export const GameView = (props: Props) => {
  const game: ViewGame | undefined = props.game;

  if (!game) return <h1>Cannot create game.</h1>;

  const allGuessedLetters = game.guessedLetters.concat(game.wrongLetters);

  const hiddenWord = (): JSX.Element => <p>{game.hiddenWord}</p>;
  const guessesCount = (): JSX.Element => <p>Guesses: {game.guesses}</p>;

  const renderGame = (game: ViewGame): JSX.Element => (
    <div>
      {hiddenWord()}

      <GuessingLettersDisplay allGuessedLetters={allGuessedLetters} />

      {guessesCount()}

      <GameStatusDisplay status={game.status} gameId={game.id} />
    </div>
  );

  return renderGame(game);
};
