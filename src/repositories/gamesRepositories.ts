import { QueryResult } from "pg";
import connection from "../database/gamesDB.js"
import { GameEntity, NewGame } from "../protocols/Game.js";

const listGameByName = async (gameTitle: string) : Promise<QueryResult<GameEntity>> =>{
  return connection.query(`
  SELECT *
  FROM games
  WHERE LOWER(title) = LOWER($1);
  `,[gameTitle])
}

const listGameById = async (gameId: number) : Promise<QueryResult<GameEntity>> =>{
  return connection.query(`
  SELECT *
  FROM games
  WHERE id = $1;
  `,[gameId])
}

const insertGame = async (newGame: NewGame): Promise<QueryResult> =>{
  return connection.query(`
  INSERT INTO games
  ("title",
  "plataform",
  "purchased",
  "gameplayTime",
  "price")
  VALUES ($1,$2,$3,$4,$5);
  `,[newGame.title,
  newGame.plataform,
  newGame.purchased,
  newGame.gameplayTime,
  newGame.price])
}

const listAllGames = async (): Promise<QueryResult<GameEntity>> => {
  return connection.query(`
  SELECT *
  FROM games;
  `)
}

const updateGame = async ()=>{

}

const removeGame = async(gameId: number) : Promise<QueryResult> =>{
  return connection.query(`
  DELETE
  FROM games
  WHERE id = $1;
  `,[gameId])
}

export {listGameByName, listGameById, insertGame, listAllGames, updateGame, removeGame}