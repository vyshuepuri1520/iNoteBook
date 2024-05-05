const connectToMongo = require('./db');
const express = require('express')
connectToMongo();


const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello Sai! am here to learn the mongodb hey')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
