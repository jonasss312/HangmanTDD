import {GameCreator} from './GameCreator'

import {WordsFromFile} from '../../gateway/implementation/WordsFromFile'
import {GamesStorage} from '../../gateway/implementation/GamesInMemmory'
import { BoundaryGame } from '../api/BoundaryGame';


const testFileName: string = '../../../testWords.txt';
const wordGenerator: WordsFromFile = new WordsFromFile(testFileName);
const gamesStorage : GamesStorage = new GamesStorage();
const gameCreator = new GameCreator(wordGenerator, gamesStorage);

describe("GameCreator", () => {
    test("Can create game", () => {
        const isGame = gameCreator.createGame() instanceof BoundaryGame;
        expect(isGame).toEqual(true);
    });
  });