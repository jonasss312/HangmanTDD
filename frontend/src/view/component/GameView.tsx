import { ViewGame } from "../../controller/model/ViewGame";
import { GameStatusDisplay } from "./GameStatusDisplay";
import { GuessingLettersDisplay } from "view/component/GuessingLettersDisplay";
import React from "react";

interface Props {
  game: ViewGame;
}

export const GameView = (props: Props) => {
  const game: ViewGame = props.game;

  const allGuessedLetters = game.guessedLetters.concat(game.wrongLetters);

  const hiddenWord = (): JSX.Element => (
    <p data-testid="hidden_word">{game.hiddenWord}</p>
  );
  const guessesCount = (): JSX.Element => (
    <p data-testid="guesses">Guesses: {game.guesses}</p>
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
