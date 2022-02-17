import { render, screen } from "@testing-library/react";
import React from "react";
import { GuessingLettersDisplay } from "./GuessingLettersDisplay";

describe("GuessingLettersDisplay", () => {
    const alphabet = Array.from(Array(26))
        .map((e, i) => i + 65)
        .map((x) => String.fromCharCode(x));

    test("Can display all enabled letters", () => {
        RenderWithUsedLetters([]);

        alphabet.forEach(letter => {
            expect(screen.getByRole(letter)).toBeEnabled()
        });
    });

    test("Can display all disabled letters", () => {
        RenderWithUsedLetters(alphabet);

        alphabet.forEach(letter => {
            expect(screen.getByRole(letter)).toBeDisabled()
        });
    });

    function RenderWithUsedLetters(lettersArray: string[]) {
        render(<GuessingLettersDisplay allGuessedLetters={lettersArray} />)
    }
});
