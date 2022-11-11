import { QueryResult } from "pg";
import connection from "../database/gamesDB.js"
import { GameEntity, GameUpdate, NewGame } from "../protocols/Game.js";

const listGameByName = async (gameTitle: string) : Promise<QueryResult<GameEntity>> =>{
  return connection.query(`
  SELECT *
  FROM games
  WHERE LOWER(title) = LOWER($1);
  `,[gameTitle]);
}

const listGameById = async (gameId: number) : Promise<QueryResult<GameEntity>> =>{
  return connection.query(`
  SELECT *
  FROM games
  WHERE id = $1;
  `,[gameId]);
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
  newGame.price]);
}

const listAllGames = async (): Promise<QueryResult<GameEntity>> => {
  return connection.query(`
  SELECT *
  FROM games;
  `);
}

const listGamesWithPlataform = async (plataform: string): Promise<QueryResult<GameEntity>> => {
  return connection.query(`
  SELECT *
  FROM games
  WHERE
  LOWER(plataform) = LOWER($1);
  `, [plataform]);
}

const countTotalPrice = async () : Promise<QueryResult<{totalPrice: number}>> => {
  return connection.query(`
  SELECT
  SUM(price) as "totalPrice"
  FROM games
  WHERE 
  purchased = false;
  `)
}

const countTotalPriceByPlataform = async () :Promise<QueryResult<{
  plataform: string,
  totalPrice: number
}>> =>{
  return connection.query(`
  SELECT
  plataform,
  SUM(price) as "totalPrice"
  FROM games
  WHERE 
  purchased = false
  GROUP BY plataform;
  `)
}

const countTotalGameplayTime = async () :Promise<QueryResult<{totalGameplayTime :number}>> =>{
  return connection.query(`
  SELECT
  SUM("gameplayTime") as "totalGameplayTime"
  FROM games
  WHERE 
  played = false;
  `)
}

const updateGame = async (gameData: GameUpdate, gameId: number)=>{
  return connection.query(`
  UPDATE games
  SET
  "title" = $1,
  "plataform" = $2,
  "purchased" = $3,
  "played" = $4,
  "gameplayTime" = $5,
  "price" = $6
  WHERE id = $7;
  ` ,[
    gameData.title,
    gameData.plataform,
    gameData.purchased,
    gameData.played,
    gameData.gameplayTime,
    gameData.price,
    gameId
  ]);
}

const updateToPurchased = async (gameId: number) =>{
  return connection.query(`
  UPDATE games
  SET
  purchased = true
  WHERE id = $1
  `,[gameId])
}

const updateToPlayed = async (gameId: number) =>{
  return connection.query(`
  UPDATE games
  SET
  played = true
  WHERE id = $1
  `,[gameId])
}

const removeGame = async(gameId: number) : Promise<QueryResult> =>{
  return connection.query(`
  DELETE
  FROM games
  WHERE id = $1;
  `,[gameId]);
}

export {
  listGameByName, 
  listGameById, 
  insertGame, 
  listAllGames, 
  listGamesWithPlataform,
  countTotalPrice,
  countTotalPriceByPlataform,
  countTotalGameplayTime, 
  updateGame,
  updateToPurchased,
  updateToPlayed, 
  removeGame}