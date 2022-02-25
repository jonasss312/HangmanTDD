import { render, screen } from "@testing-library/react";
import React from "react";
import { InitialWindow } from "../initial-window/InitialWindow";

describe("HomeWindow", () => {
  test("Can display heading and start button", () => {
    render(<InitialWindow />);

    expect(screen.getByTestId("heading")).toBeInTheDocument();
    expect(screen.getByTestId("start_button")).toBeInTheDocument();
    expect(screen.getByTestId("game_rules_display")).toBeInTheDocument();
  });
});

jest.mock("../../component/GameRulesDisplay", () => ({
  GameRulesDisplay: () => <div data-testid="game_rules_display" />,
}));
