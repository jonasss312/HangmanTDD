import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CreateGameController } from "controller/implementation/CreateGameController";
import { ViewGame } from "controller/model/ViewGame";
import useCreateGame from "view/container/home-window/useCreateGame";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: "100%",
  width: "auto",
  p: 4,
};

interface Props {
  status: string;
  setGameCallBack: (game: ViewGame | undefined) => void;
  createGameController: CreateGameController;
}

export default function GameEndModal(props: Props) {
  const createGame = useCreateGame(
    props.createGameController,
    props.setGameCallBack
  );

  const gameResult = () => {
    if (props.status === "WON") return true;
    if (props.status === "LOST") return false;
    return undefined;
  };

  const gameEnd = () => props.status !== "IN_PROGRESS";

  const displayGameResult = (): JSX.Element => {
    let won = gameResult();
    if (won)
      return (
        <Typography align="center" variant="h3">
          YOU WIN!
        </Typography>
      );
    else if (!won)
      return (
        <Typography align="center" variant="h4">
          YOU LOSE!
        </Typography>
      );
    return <></>;
  };

  const displayButton = () => (
    <Fade in={gameEnd()} timeout={3000}>
      <Button size="large" onClick={createGame}>
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
    >
      <Fade in={gameEnd()}>
        <Box sx={style}>
          {gameResult() != undefined ? (
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
}
