import { ViewGame } from "../../controller/model/ViewGame";
import { GameStatusDisplay } from "./GameStatusDisplay";
import { GuessingLettersDisplay } from "../container/game-window/GuessingLettersDisplay";
import React from "react";
import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { WrappedCollapseComponent } from "view/container/game-window/WrappedCollapseComponent";
import { HangmanDisplay } from "../component/HangmanDisplay";

interface Props {
  game: ViewGame;
  guessLetterController: GuessLetterController;
  setGameCallBack: (game: ViewGame | undefined) => void;
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

  const renderGameView = (): JSX.Element => (
    <div>
      <HangmanDisplay wrongGuessesCount={game.wrongLetters.length} />

      {hiddenWord()}

      <GuessingLettersDisplay
        gameId={game.id}
        allGuessedLetters={allGuessedLetters}
        guessLetterController={props.guessLetterController}
        setGameCallBack={props.setGameCallBack}
      />

      {guessesCount()}

      <GameStatusDisplay status={game.status} gameId={game.id} />
    </div>
  );

  return (
    <WrappedCollapseComponent>{renderGameView()}</WrappedCollapseComponent>
  );
};
