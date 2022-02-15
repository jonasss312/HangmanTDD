import { Button } from "@mui/material";

interface Props {
  guessedLetters: string[];
  wrongLetters: string[];
}

export const GuessingLettersDisplay = (props: Props) => {
  const guessedLetters = props.guessedLetters;
  const wrongLetters = props.wrongLetters;

  const alphabet = Array.from(Array(26))
    .map((e, i) => i + 65)
    .map((x) => String.fromCharCode(x));

  const isLetterUsed = (
    guessedLetters: string[],
    wrongLetters: string[],
    letter: string
  ): boolean =>
    guessedLetters.includes(letter) || wrongLetters.includes(letter);

  return (
    <div>
      {alphabet.map((letter) => (
        <Button disabled={isLetterUsed(guessedLetters, wrongLetters, letter)}>
          {letter}
        </Button>
      ))}
    </div>
  );
};
