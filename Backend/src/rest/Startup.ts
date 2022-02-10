import {Server} from './Server'
import {Routes} from './Routes'
import { CreateGameInteractor } from '../usecase/implementation/CreateGameInteractor';
import { WordsFromFile } from '../gateway/implementation/WordsFromFile';
import { GamesStorage } from '../gateway/implementation/GamesStorage';
import { CreateGameRoute } from './implementation/CreateGameRoute';
import { GameB2RConverter } from './implementation/GameB2RConverter';
const FILE_NAME = '../../../words.txt';
const WORDS_FROM_FILE = new WordsFromFile(FILE_NAME);
const GAMES_STORAGE = new GamesStorage();
const CREATE_GAME_INTERACTOR = new CreateGameInteractor(WORDS_FROM_FILE, GAMES_STORAGE);
const GAME_B2R_CONVERTER = new GameB2RConverter();

const CREATE_GAME_ROUTE = new CreateGameRoute(CREATE_GAME_INTERACTOR, GAME_B2R_CONVERTER);

new Server(false, new Routes(CREATE_GAME_ROUTE));