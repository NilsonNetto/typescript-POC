import express from "express";
import * as gamesControllers from "../controllers/gamesController.js"

const router = express.Router();

router.post('/game', gamesControllers.addGame)

router.get('/games', gamesControllers.listGames)

router.get('/games/plataform/:plataform', gamesControllers.listGamesByPlataform)

router.get('/games/totalprice', gamesControllers.listTotalPrice)

router.get('/games/totaltime', gamesControllers.listTotalGameplayTime)

router.put('/game/:id', gamesControllers.modifyGame)

router.delete('/game/:id', gamesControllers.deleteGame)

export default router;
