import express from "express";
import * as gamesControllers from "../controllers/gamesController.js"

const router = express.Router();

router.post('/game', gamesControllers.addGame)

router.get('/games', gamesControllers.listGames)

router.put('/game/:id', gamesControllers.modifyGame)

router.delete('/game/:id', gamesControllers.deleteGame)

export default router;
