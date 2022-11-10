import { Request,Response } from "express"
import { GameUpdate, NewGame } from "../protocols/Game.js"
import { gameSchema, updatedGameSchema } from "../schemas/gameSchema.js";
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
      return res.status(409).send(`Game already on wishlist with id ${isRepeated.rows[0].id}`);
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

const listGamesByPlataform = async (req: Request, res: Response) =>{

  const plataform = req.params.plataform as string;

  try {
    
    const gamesListInPlataform = await gamesRepositories.listGamesWithPlataform(plataform);

    return res.status(200).send(gamesListInPlataform.rows)
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

const listTotalPrice = async (req: Request, res: Response) => {

  try {
    
    const totalPrice = await gamesRepositories.countTotalPrice();

    const message: string = `
    To buy all nonpurchased games on wishlist you'll need R$ ${(totalPrice.rows[0].totalPrice/100).toFixed(2)}`;

    return res.status(200).send(message);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

const listTotalGameplayTime = async (req: Request, res: Response) => {

  try {
    
    const totalGameplayTime = await gamesRepositories.countTotalGameplayTime();

    const message: string = `
    To play all unplayed games on wishlist you'll need ${totalGameplayTime.rows[0].totalGameplayTime} hours`;

    return res.status(200).send(message);

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

const modifyGame = async (req: Request,res: Response)=>{
  const gameId = Number(req.params.id) as number;
  const gameData = req.body as GameUpdate;

  if(isNaN(gameId)){
    return res.status(400).send(`Game id must be a valid number`);
  }

  const validation = updatedGameSchema.validate(req.body,{abortEarly: false});

  if(validation.error){
    const errors = validation.error.details.map(error => error.message);
    return res.status(400).send(errors);
  }

  try {
    const gameExists = await gamesRepositories.listGameById(gameId);

    if(gameExists.rowCount === 0){
      return res.status(400).send(`Game id doesn't exists`);
    }
    
    const isRepeated = await gamesRepositories.listGameByName(gameData.title);

    if(isRepeated.rowCount !== 0){
      if(isRepeated.rows[0].id !== gameId){
        return res.status(409).send(`Game already on wishlist with id ${isRepeated.rows[0].id}`);
      }
    }

    await gamesRepositories.updateGame(gameData, gameId);

    return res.status(200).send(`Game updated`);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }

}

const deleteGame = async (req: Request,res: Response) =>{
  const gameId = Number(req.params.id) as number;

  if(isNaN(gameId)){
    return res.status(400).send(`Game id must be a valid number`);
  }

  try {
    
    const gameExists = await gamesRepositories.listGameById(gameId);

    if(gameExists.rowCount === 0){
      return res.status(400).send(`Game id doesn't exists`);
    }

    await gamesRepositories.removeGame(gameId);

    return res.status(200).send(`Game removed from wishlist`);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export {
  addGame, 
  listGames, 
  listGamesByPlataform, 
  listTotalPrice,
  listTotalGameplayTime,
  modifyGame, 
  deleteGame}