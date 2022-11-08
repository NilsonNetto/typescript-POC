import express from "express";

const app = express();

app.use(express.json())

app.get('/status', (req,res) =>{ 
  res.send('certinho')
})

app.listen(4000, ()=>{
  console.log(`Listening on port ${4000}`)
})