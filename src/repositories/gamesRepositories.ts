import connection from "../database/gamesDB.js"

const insertGame = async () =>{
  return connection.query(`
  INSERT INTO games
  ("title",
  "plataform",
  "purchased",
  "played",
  "gameplayTime",
  "price")
  VALUES ($1,$2,$3,$4,$5,$6);
  `,[])
}

const listAllGames = async ()=> {
  return await connection.query(`
  SELECT *
  from games;
  `)
}

const updateGame = async ()=>{

}

const removeGame = async() =>{

}

export {insertGame, listAllGames, updateGame, removeGame}