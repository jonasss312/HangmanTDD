import {Server} from './Server'
import {Routes} from './Routes'
import { CreateGameInteractor } from '../usecase/implementation/CreateGameInteractor';
import { WordsFromFile } from '../gateway/implementation/WordsFromFile';
import { GamesStorage } from '../gateway/implementation/GamesStorage';
const FILE_NAME = '../../../words.txt';
const WORDS_FROM_FILE = new WordsFromFile(FILE_NAME);
const GAMES_STORAGE = new GamesStorage();
const CREATE_GAME_INTERACTOR = new CreateGameInteractor(WORDS_FROM_FILE, GAMES_STORAGE);

new Server(false, new Routes(CREATE_GAME_INTERACTOR));