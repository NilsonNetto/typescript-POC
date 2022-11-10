import express from "express";
import dotenv from "dotenv"
import gamesRouter from "./routers/gamesRouter.js"
dotenv.config()

const app = express();

app.use(express.json())

app.use(gamesRouter)

app.listen(process.env.PORT, ()=>{
  console.log(`Listening on port ${process.env.PORT}`)
})