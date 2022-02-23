import React from "react";
import "./App.css";
import { CreateGameController } from "./controller/implementation/CreateGameController";
import { GetNewGameInteractor } from "./usecase/implementation/GetNewGameInteractor";
import { RestGamesGateway } from "./gateway/implementation/RestGamesGateway";
import { ClientImplementation } from "./gateway/implementation/ClientImplementation";
import { SERVER_URL } from "./constant/RestConstants";
import { GameB2VConverter } from "./controller/implementation/GameB2VConverter";
import { GameD2BConverter } from "./usecase/implementation/GameD2BConverter";
import { InitialWindow } from "./view/container/initial-window/InitialWindow";
import { GuessLetterController } from "controller/implementation/GuessLetterController";
import { GuessLetterInteractor } from "usecase/implementation/GuessLetterInteractor";
import { GuessV2BConverter } from "controller/implementation/GuessV2BConverter";
//import { useCreateGame } from "./hook/useCreateGame";
function App() {
    const clientImplementation = new ClientImplementation(SERVER_URL);
    const restGamesGateway = new RestGamesGateway(clientImplementation);
    const gameB2VConverter = new GameB2VConverter();
    const gameD2BConverter = new GameD2BConverter();
    const guessV2BConverter = new GuessV2BConverter();
    const getNewGameInteractor = new GetNewGameInteractor(restGamesGateway, gameD2BConverter);
    const guessLetterInteractor = new GuessLetterInteractor(restGamesGateway, gameD2BConverter);
    const createGameController = new CreateGameController(getNewGameInteractor, gameB2VConverter);
    const guessLetterController = new GuessLetterController(guessLetterInteractor, gameB2VConverter, guessV2BConverter);
    let start = false;
    return (React.createElement("div", null,
        React.createElement(InitialWindow, { createGameController: createGameController, guessLetterController: guessLetterController })));
}
export default App;
