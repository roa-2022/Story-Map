const express = require('express')

const db = require('../db/stories')

const router = express.Router()

<<<<<<< HEAD
router.get('/', (req, res) => {
  db.getStories()
    .then((data) => {
      res.json({ stories: data.map((story) => story.title) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

=======
>>>>>>> 0770e9a0dc9afc9623846df977b965ea321019cf
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getOneStory(id)
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
