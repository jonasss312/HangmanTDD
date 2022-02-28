import { render, screen } from "@testing-library/react";
import React from "react";
import { GuessCountDisplay } from "./GuessCountDisplay";

describe("GuessCountDisplay", () => {
  test("Can display guesses", () => {
    const guessesCount = 10;

    render(<GuessCountDisplay guesses={guessesCount} />);

    expect(screen.getByTestId("guesses")).toHaveTextContent(
      guessesCount.toString()
    );
  });
});
