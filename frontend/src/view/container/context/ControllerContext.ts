import { CreateGameController } from "controller/implementation/CreateGameController";
import { GameB2VConverter } from "controller/implementation/GameB2VConverter";
import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { GuessV2BConverter } from "controller/implementation/GuessV2BConverter";
import { ClientImplementation } from "gateway/implementation/ClientImplementation";
import { RestGamesGateway } from "gateway/implementation/RestGamesGateway";
import { GameD2BConverter } from "usecase/implementation/GameD2BConverter";
import { GetNewGameInteractor } from "usecase/implementation/GetNewGameInteractor";
import { GuessLetterInteractor } from "usecase/implementation/GuessLetterInteractor";
import { SERVER_URL } from "constant/RestConstants";
import React from "react";

const clientImplementation = new ClientImplementation(SERVER_URL);
const restGamesGateway = new RestGamesGateway(clientImplementation);

const gameB2VConverter = new GameB2VConverter();
const gameD2BConverter = new GameD2BConverter();
const guessV2BConverter = new GuessV2BConverter();

const getNewGameInteractor = new GetNewGameInteractor(
  restGamesGateway,
  gameD2BConverter
);

const guessLetterInteractor = new GuessLetterInteractor(
  restGamesGateway,
  gameD2BConverter
);

export interface Controllers {
  guessLetterController: GuessLetterController;
  createGameController: CreateGameController;
}

export const ControllerContext = React.createContext({
  guessLetterController: new GuessLetterController(
    guessLetterInteractor,
    gameB2VConverter,
    guessV2BConverter
  ),
  createGameController: new CreateGameController(
    getNewGameInteractor,
    gameB2VConverter
  ),
});
