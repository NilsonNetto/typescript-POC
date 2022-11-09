import { Request,Response } from "express"
import { Game } from "../protocols/Game.js"
import { gameSchema } from "../schemas/gameSchema.js";
import * as gamesRepositories from "../repositories/gamesRepositories.js"

const addGame = (req: Request,res: Response) =>{
  const newGame = req.body as Game;

  const validation = gameSchema.validate(req.body,{abortEarly: false})

  if(validation.error){
    const errors = validation.error.details.map(error => error.message)
    return res.status(400).send(errors)
  }

}

const listGames = async (req: Request,res: Response) =>{
  
try {
  const gamesList = await gamesRepositories.listAllGames();
  return res.status(200).send(gamesList.rows)
} catch (error) {
  console.log(error)
  return res.sendStatus(500)
}
}

const modifyGame = (req: Request,res: Response)=>{
  const gameId = Number(req.params.id) as number

}

const deleteGame = (req: Request,res: Response) =>{
  const gameId = Number(req.params.id) as number

}

export {addGame, listGames, modifyGame, deleteGame}