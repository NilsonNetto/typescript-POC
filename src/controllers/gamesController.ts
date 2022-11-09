import { Request,Response } from "express"
import { Game } from "../protocols/Game"
import { gameSchema } from "../schemas/gameSchema";

const addGame = (req: Request,res: Response) =>{
  const newGame = req.body as Game;

  const validation = gameSchema.validate(req.body,{abortEarly: false})

  if(validation.error){
    const errors = validation.error.details.map(error => error.message)
    return res.status(400).send(errors)
  }

}

const listGames = (req: Request,res: Response) =>{
  
}

const modifyGame = (req: Request,res: Response)=>{
  const gameId = Number(req.params.id) as number

}

const deleteGame = (req: Request,res: Response) =>{
  const gameId = Number(req.params.id) as number

}

export {addGame, listGames, modifyGame, deleteGame}