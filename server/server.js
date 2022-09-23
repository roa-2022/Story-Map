const express = require('express')
const path = require('path')

const searchRoutes = require('./routes/search')
const storiesRoutes = require('./routes/stories')
const userRoutes = require('./routes/users')
const regionsRoutes = require('./routes/regions')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/search', searchRoutes)
server.use('/api/v1/stories', storiesRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/regions', regionsRoutes)


// to go to front end routes
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
