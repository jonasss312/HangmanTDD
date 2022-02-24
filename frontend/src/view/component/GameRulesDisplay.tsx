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
          <ListItem>
            <DoubleArrowRoundedIcon />
            Number of dashes equivalent to the number of letters in the word.
          </ListItem>
          <ListItem>
            <DoubleArrowRoundedIcon />
            If a guessing player suggests a letter that occurs in the word,
            blanks with that letter fills in the right places.
          </ListItem>
          <ListItem>
            <DoubleArrowRoundedIcon />
            If the word does not contain the suggested letter, one element of a
            hangman’s gallows is drawn.
          </ListItem>
          <ListItem>
            <DoubleArrowRoundedIcon />
            If player guessed 10 times incorrectly, game over.
          </ListItem>
          <ListItem>
            <DoubleArrowRoundedIcon />
            Player win if all word letters are revealed and hangman drawing is
            not completed.
          </ListItem>
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
