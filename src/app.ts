import express from "express";
import gamesRouter from "./routers/gamesRouter.js"

const app = express();

app.use(express.json())

app.use(gamesRouter)

app.get('/status', (req,res) =>{ 
  res.send('certinho')
})

app.listen(4000, ()=>{
  console.log(`Listening on port ${4000}`)
})