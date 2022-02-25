import { render, screen } from "@testing-library/react";
import React from "react";
import { InitialWindow } from "../initial-window/InitialWindow";
import * as useCreateGame from "./useCreateGame";

describe("HomeWindow", () => {
  test("Can display heading and start button", () => {
    jest.spyOn(useCreateGame, "default").mockReturnValue(jest.fn());

    render(<InitialWindow />);

    expect(screen.getByTestId("heading")).toBeInTheDocument();
    expect(screen.getByTestId("start_button")).toBeInTheDocument();
    expect(screen.getByTestId("game_rules_display")).toBeInTheDocument();
  });
});

jest.mock("../../component/GameRulesDisplay", () => ({
  GameRulesDisplay: () => <div data-testid="game_rules_display" />,
}));
