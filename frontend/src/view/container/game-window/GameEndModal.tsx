import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ViewGame } from "controller/model/ViewGame";
import useCreateGame from "view/container/home-window/useCreateGame";
import { useColorChange } from "view/component/useColorChange";

const style = {
  position: "absolute" as "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: "100%",
  width: "auto",
};

interface Props {
  status: string;
  setGameCallBack: (game: ViewGame | undefined) => void;
  word: string;
}

export const GameEndModal = (props: Props) => {
  const color = useColorChange(["#e91e63", "#FFEB3B"]);
  const createGame = useCreateGame(props.setGameCallBack);

  const gameEnd = () => props.status !== "IN_PROGRESS";

  const getBackgroundColor = (): string => {
    if (props.status == "WON") return "black";
    return "red";
  };

  const displayGameResult = (): JSX.Element => {
    if (props.status === "WON")
      return (
        <Typography data-testid="won_text" align="center" variant="h3">
          YOU WIN!
        </Typography>
      );
    return (
      <>
        <Typography data-testid="lost_text" align="center" variant="h4">
          YOU LOSE!
        </Typography>
        {displayHiddenWord()}
      </>
    );
  };

  const displayHiddenWord = () => (
    <Typography
      data-testid="hidden_word"
      align="center"
      variant="h5"
      style={{ color: color }}
    >
      {props.word}
    </Typography>
  );

  const displayButton = () => (
    <Fade in={gameEnd()} timeout={2500}>
      <Button data-testid="new_game_button" size="large" onClick={createGame}>
        <Typography variant="h2">NEW GAME</Typography>
      </Button>
    </Fade>
  );

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={gameEnd()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{ bgcolor: getBackgroundColor() }}
    >
      <Fade in={gameEnd()}>
        <Box sx={style}>
          {gameEnd() ? (
            <>
              {displayGameResult()}

              {displayButton()}
            </>
          ) : (
            <></>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};
