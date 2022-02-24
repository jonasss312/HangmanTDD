import { List, ListItem, Paper, Typography, Fade } from "@mui/material";
import React from "react";
import { WrappedCollapseComponent } from "view/container/game-window/WrappedCollapseComponent";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";

export const GameRulesDisplay = () => {
  const renderGameRules = () => (
    <div>
      <Typography variant="h2" paddingLeft={"12px"}>
        Rules
      </Typography>
      <Typography variant="body1">
        <List>
          {DisplayRule(
            "Number of dashes equivalent to the number of letters in the word."
          )}
          {DisplayRule(
            "If a guessing player suggests a letter that occurs in the word, blanks with that letter fills in the right places."
          )}
          {DisplayRule(
            "If the word does not contain the suggested letter, one element of a hangman’s gallows is drawn."
          )}
          {DisplayRule("If player guessed 10 times incorrectly, game over.")}
          {DisplayRule(
            "Player win if all word letters are revealed and hangman drawing is not completed."
          )}
        </List>
      </Typography>
    </div>
  );

  return (
    <Fade in={true} timeout={7000}>
      <div>
        <Paper>
          <WrappedCollapseComponent>
            <div>{renderGameRules()}</div>
          </WrappedCollapseComponent>
        </Paper>
      </div>
    </Fade>
  );
};

const DisplayRule = (text: string) => (
  <ListItem>
    <DoubleArrowRoundedIcon />
    {text}
  </ListItem>
);
