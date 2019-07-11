const express = require('express')

const app = express()
const scraper = require('./scrapper.js')

app.get('/', (req, res) => {
  // console.log(req, res)
})

app.get('/search/:name', (req, res) => {
  scraper.searchAnime(req.params.name)
    .then(anime => {
      res.json(anime)
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("listening: " + port)
})
