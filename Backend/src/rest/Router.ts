
const express = require('express');
const router = express.Router();

const CREATE_GAME_ROUTE = require('./implementation/CreateGameRoute')

//Create game
router.post('/', CREATE_GAME_ROUTE.createNewGame());

module.exports = router;