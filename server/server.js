const express = require('express')
const path = require('path')

<<<<<<< HEAD
const fruitRoutes = require('./routes/fruits')
const searchRoutes = require('./routes/search')
=======
const storiesRoutes = require('./routes/stories')
>>>>>>> ebbd9854355898f197ef4a1adc444dab76d46bd8

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

<<<<<<< HEAD
server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/search', searchRoutes)
=======
server.use('/api/v1/stories', storiesRoutes)
// to go to front end routes
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})
>>>>>>> ebbd9854355898f197ef4a1adc444dab76d46bd8

module.exports = server
