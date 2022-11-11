import express from "express";
import * as gamesControllers from "../controllers/gamesController.js"

const router = express.Router();

router.post('/games', gamesControllers.addGame)

router.get('/games', gamesControllers.listGames)

router.get('/games/plataform/:plataform', gamesControllers.listGamesByPlataform)

router.get('/games/totalprice', gamesControllers.listTotalPrice)

router.get('/games/totalprice/plataform', gamesControllers.listTotalPriceByPlataform)

router.get('/games/totaltime', gamesControllers.listTotalGameplayTime)

router.put('/games/:id', gamesControllers.modifyGame)

router.patch('/games/:id/purchased', gamesControllers.purchaseGame)

router.patch('/games/:id/played', gamesControllers.playedGame)

router.delete('/games/:id', gamesControllers.deleteGame)

export default router;
