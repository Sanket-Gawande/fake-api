import express from "express"
import data from "./data.js"

const app = express()
app.get('/search', (req, res) => {
  const { q } = req.query
  const payload = data[decodeURIComponent(q)]
  res.json(payload ? payload : {
    data: [],
    total: 0,
    next: 'not found'
  })
})


app.listen(1234, error => {
  if (error) console.log(error)
  else console.log('Server running @1234')
})