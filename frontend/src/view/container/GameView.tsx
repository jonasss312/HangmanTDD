import useCreateGame from "../../hook/useCreateGame";
import { CreateGameController } from "../../controller/implementation/CreateGameController";
import { ViewGame } from "../../controller/model/ViewGame";
import { GameStatusDisplay } from "../component/GameStatusDisplay";
import { GuessingLettersDisplay } from "view/component/GuessingLettersDisplay";
import React from "react";

export const GameView = (createGameController: CreateGameController) => {
  const game: ViewGame | undefined = useCreateGame(createGameController);

  if (!game) return <h1>Cannot create game.</h1>;

  const allGuessedLetters = game.guessedLetters.concat(game.wrongLetters);

  const hiddenWord = (): JSX.Element => <text>{game.hiddenWord}</text>;
  const guessesCount = (): JSX.Element => <text>Guesses: {game.guesses}</text>;

  const renderGame = (game: ViewGame): JSX.Element => (
    <div>
      {hiddenWord()}

      <GuessingLettersDisplay allGuessedLetters={allGuessedLetters} />

      {guessesCount()}

      <GameStatusDisplay status={game.status} gameId={game.id} />
    </div>
  );

  return <>{renderGame(game)}</>;
};
