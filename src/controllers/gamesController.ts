import { Request,Response } from "express"
import { GameEntity, NewGame } from "../protocols/Game.js"
import { gameSchema } from "../schemas/gameSchema.js";
import * as gamesRepositories from "../repositories/gamesRepositories.js"

const addGame = async (req: Request,res: Response) =>{
  const newGame = req.body as NewGame;

  const validation = gameSchema.validate(req.body,{abortEarly: false});

  if(validation.error){
    const errors = validation.error.details.map(error => error.message);
    return res.status(400).send(errors);
  }

  try {

    const isRepeated = await gamesRepositories.listGameByName(newGame.title);

    if(isRepeated.rowCount !== 0){
      return res.status(400).send(`Game already on wishlist with id ${isRepeated.rows[0].id}`);
    }
    
    await gamesRepositories.insertGame(newGame);

    return res.status(201).send(`Game inserted`);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

const listGames = async (req: Request,res: Response) =>{
  
try {
  const gamesList = await gamesRepositories.listAllGames();
  return res.status(200).send(gamesList.rows);
} catch (error) {
  console.log(error);
  return res.sendStatus(500);
}
}

const modifyGame = (req: Request,res: Response)=>{
  const gameId = Number(req.params.id) as number

}

const deleteGame = (req: Request,res: Response) =>{
  const gameId = Number(req.params.id) as number

}

export {addGame, listGames, modifyGame, deleteGame}