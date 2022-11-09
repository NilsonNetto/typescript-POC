import { Request,Response } from "express"
import { games } from "../database/gamesDB"
import { Game } from "../protocols/Game"

const insertGame = (req: Request,res: Response) =>{
  const newGame = req.body as Game;

}

const listGames = (req: Request,res: Response) =>{
  
}

const updateGame = (req: Request,res: Response)=>{
  const gameId = Number(req.params.id) as number

}

const deleteGame = (req: Request,res: Response) =>{
  const gameId = Number(req.params.id) as number

}

export {insertGame, listGames, updateGame, deleteGame}