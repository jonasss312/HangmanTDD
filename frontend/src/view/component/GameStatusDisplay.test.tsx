import { render, screen } from "@testing-library/react";
import React from "react";
import { GameStatusDisplay } from "./GameStatusDisplay";

describe("GameStatusDisplay", () => {
  test("Can display game won", () => {
    RenderWithStatus("WON");
    expect(screen.getByTestId("game_status")).toHaveTextContent("YOU WIN!");
  });

  test("Can display game lost", () => {
    RenderWithStatus("LOST");
    expect(screen.getByTestId("game_status")).toHaveTextContent("YOU LOSE!");
  });

  test("Can display game in progress id", () => {
    RenderWithStatus("IN_PROGRESS");
    expect(screen.getByTestId("game_status")).toHaveTextContent("Game ID: 1");
  });

  function RenderWithStatus(status: string) {
    render(<GameStatusDisplay status={status} gameId={1} />);
  }
});
