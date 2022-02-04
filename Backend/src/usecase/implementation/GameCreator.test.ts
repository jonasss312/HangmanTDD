import { mocked } from 'ts-jest/utils'

import {CreateGameInteractor} from './GameCreator'

import {WordsFromFile} from '../../gateway/implementation/WordsFromFile'
import {GamesStorage} from '../../gateway/implementation/GamesInMemmory'
import { BoundaryGame } from '../model/BoundaryGame';

const testFileName: string = '../../../testWords.txt';
const wordGenerator: WordsFromFile = new WordsFromFile(testFileName);
const gamesStorage : GamesStorage = new GamesStorage();
const gameCreator = new CreateGameInteractor(wordGenerator, gamesStorage);

describe("GameCreator", () => {
    test("Can create game", () => {
        const isGame = gameCreator.createGame() instanceof BoundaryGame;
        expect(isGame).toEqual(true);
    });
  });