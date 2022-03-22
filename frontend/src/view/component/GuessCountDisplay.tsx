import { Typography } from "@mui/material";
import React from "react";
import { useColorChange } from "./useColorChange";

interface Props {
  guesses: number;
}

export const GuessCountDisplay = (props: Props): JSX.Element => {
  const colorStateGuessCount = useColorChange(["#33eaff", "#FFEB3B"]);

  return (
    <Typography
      variant="overline"
      style={{ color: colorStateGuessCount }}
      data-testid="guesses"
    >
      Guesses: {props.guesses}
    </Typography>
  );
};
