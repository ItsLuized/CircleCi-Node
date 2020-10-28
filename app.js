const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.json({message: 'Testing, Testing, 1,2,3'});
})

module.exports = app;