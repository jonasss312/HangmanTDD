
//const express = require('express');
import express, { Router } from "express";
import { Express } from 'express-serve-static-core'

import { CreateGameRoute } from './implementation/CreateGameRoute';
import { CreateGameInteractor } from '../usecase/implementation/CreateGameInteractor';
import { WordsFromFile } from '../gateway/implementation/WordsFromFile';
import { GamesStorage } from '../gateway/implementation/GamesStorage';

const FILE_NAME = '../../../words.txt';
const WORDS_FROM_FILE = new WordsFromFile(FILE_NAME);
const GAMES_STORAGE = new GamesStorage();
const CREATE_GAME_INTERACTOR = new CreateGameInteractor(WORDS_FROM_FILE, GAMES_STORAGE);
const CREATE_GAME_ROUTE = new CreateGameRoute(CREATE_GAME_INTERACTOR);


export function createRouter(): Router {

    let router = express.Router();

    router.post('/', (request: any, response: any) => {
        const game = CREATE_GAME_ROUTE.createGame();
        response.status(201).send(game);
    });

    router.get('/', (req: any, res: any) => {
        res.send("Hello")
    });

    return router;
}