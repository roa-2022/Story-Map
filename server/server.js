const express = require('express')
const path = require('path')

<<<<<<< HEAD
=======
const searchRoutes = require('./routes/search')
>>>>>>> 0770e9a0dc9afc9623846df977b965ea321019cf
const storiesRoutes = require('./routes/stories')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

<<<<<<< HEAD
=======
server.use('/api/search', searchRoutes)
>>>>>>> 0770e9a0dc9afc9623846df977b965ea321019cf
server.use('/api/v1/stories', storiesRoutes)
// to go to front end routes
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
