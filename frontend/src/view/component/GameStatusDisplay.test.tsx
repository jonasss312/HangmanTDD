import { render, screen } from "@testing-library/react";
import React from "react";
import { GameStatusDisplay } from "./GameStatusDisplay";

describe("GameStatusDisplay", () => {
    test("Can display game won", () => {
        Render("WON");
        expect(screen.getByRole("game_status")).toHaveTextContent("YOU WIN!");
    });

    test("Can display game lost", () => {
        Render("LOST");
        expect(screen.getByRole("game_status")).toHaveTextContent("YOU LOSE!");
    });

    test("Can display game in progress id", () => {
        Render("IN_PROGRESS");
        expect(screen.getByRole("game_status")).toHaveTextContent("Game ID: 1");
    });

    function Render(status: string) {
        render(<GameStatusDisplay status={status} gameId={1} />)
    }
});
