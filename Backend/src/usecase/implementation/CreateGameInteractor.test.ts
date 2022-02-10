import { mock, MockProxy } from 'jest-mock-extended';

import { CreateGameInteractor } from './CreateGameInteractor'
import { BoundaryGame } from '../model/BoundaryGame';
import { Game } from '../../domain/Game';
import { GameD2BConverter } from './GameD2BConverter';
import WordsGateway from '../../gateway/api/WordsGateway'
import GamesGateway from '../../gateway/api/GamesGateway'



describe("GameCreator", () => {
    let wordsGW: MockProxy<WordsGateway>;
    let gamesGW: MockProxy<GamesGateway>;
    let gameD2BConverter: MockProxy<GameD2BConverter>;
    let createGameInteractor: CreateGameInteractor;

    beforeEach(() => {
        wordsGW = mock<WordsGateway>();
        gamesGW = mock<GamesGateway>();
        gameD2BConverter = mock<GameD2BConverter>();
        createGameInteractor = new CreateGameInteractor(wordsGW, gamesGW, gameD2BConverter);
    });
    test("Can create game", () => {
        const id = 1;
        const testWord = "TEST";
        const hiddenTestWord = "____";
        const convertedGame: BoundaryGame = new BoundaryGame(id, [], [], hiddenTestWord, 0, "IN_PROGRESS")

        wordsGW.loadWord.mockReturnValue(testWord);
        gamesGW.generateId.mockReturnValue(id);
        gameD2BConverter.convert.mockReturnValue(convertedGame);

        const createdGame: BoundaryGame = createGameInteractor.createGame()
        const newGame: Game = gamesGW.addGame.mock.calls[0][0];

        expect(wordsGW.loadWord).toHaveBeenCalled();
        expect(gamesGW.generateId).toHaveBeenCalled();
        expect(gameD2BConverter.convert).toBeCalledWith(newGame);
        assertGameGatewayAddGameParam(newGame, id, testWord);
        assertInteractorOutput(createdGame, id, hiddenTestWord);
    });

    function assertGameGatewayAddGameParam(game: Game, id: number, word: string) {
        expect(game.getId()).toEqual(id)
        expect(game.getGuessedLetters()).toEqual([])
        expect(game.getWrongLetters()).toEqual([])
        expect(game.getWord()).toEqual(word);
    }

    function assertInteractorOutput(game: BoundaryGame, id: number, word: string) {
        expect(game.getId()).toEqual(id)
        expect(game.getGuessedLetters()).toEqual([])
        expect(game.getWrongLetters()).toEqual([])
        expect(game.getHiddenWord()).toEqual(word);
    }
});