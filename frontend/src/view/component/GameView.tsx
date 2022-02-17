import { ViewGame } from "../../controller/model/ViewGame";
import { GameStatusDisplay } from "./GameStatusDisplay";
import { GuessingLettersDisplay } from "view/component/GuessingLettersDisplay";
import React from "react";

interface Props {
  game: ViewGame | undefined;
}

export const GameView = (props: Props) => {
  const game: ViewGame | undefined = props.game;

  if (!game) return <h1>Cannot create game.</h1>;

  const allGuessedLetters = game.guessedLetters.concat(game.wrongLetters);

  const hiddenWord = (): JSX.Element => (
    <p role="hidden_word">{game.hiddenWord}</p>
  );
  const guessesCount = (): JSX.Element => (
    <p role="guesses">Guesses: {game.guesses}</p>
  );

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
