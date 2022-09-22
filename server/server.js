const express = require('express')
const path = require('path')

const fruitRoutes = require('./routes/fruits')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/stories', fruitRoutes)

// always at the bottom to hit server amd
server.get('*', (req, res)=> {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
