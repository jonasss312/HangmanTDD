import { Server } from './Server'
import { Routes } from './Routes'
import { CreateGameInteractor } from '../usecase/implementation/CreateGameInteractor';
import { WordsFromFile } from '../gateway/implementation/WordsFromFile';
import { GamesStorage } from '../gateway/implementation/GamesStorage';
import { CreateGameRoute } from './implementation/CreateGameRoute';
import { GameB2RConverter } from './implementation/GameB2RConverter';
import { UpsertGameRoute } from './implementation/UpsertGameRoute';
import { UpsertGameInteractor } from '../usecase/implementation/UpsertGameInteractor';
import { GameD2BConverter } from '../usecase/implementation/GameD2BConverter';
import { UpdateR2BConverter } from './implementation/UpdateR2BConverter';

const FILE_NAME = '../../../words.txt';
const WORDS_FROM_FILE = new WordsFromFile(FILE_NAME);
const GAMES_STORAGE = new GamesStorage();
const CREATE_GAME_INTERACTOR = new CreateGameInteractor(WORDS_FROM_FILE, GAMES_STORAGE);
const GAME_B2R_CONVERTER = new GameB2RConverter();
const GAME_D2B_CONVERTER = new GameD2BConverter();
const UPDATE_R2B_CONVERTER = new UpdateR2BConverter();
const UPSERT_GAME_INTERACTOR = new UpsertGameInteractor(GAMES_STORAGE, GAME_D2B_CONVERTER);

const CREATE_GAME_ROUTE = new CreateGameRoute(CREATE_GAME_INTERACTOR, GAME_B2R_CONVERTER);
const UPSERT_GAME_ROUTE = new UpsertGameRoute(UPSERT_GAME_INTERACTOR, GAME_B2R_CONVERTER, UPDATE_R2B_CONVERTER);

new Server(false, new Routes(CREATE_GAME_ROUTE, UPSERT_GAME_ROUTE));