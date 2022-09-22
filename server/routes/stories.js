const express = require('express')

const db = require('../db/stories')

const router = express.Router()

router.get('/', (req, res) => {
  // const id = req.params.id
  db.getStories()
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
  // db.getOneStory(id)
  //   .then((result) => {
  //     res.json(result)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //     res.status(500).json({ message: 'Something went wrong' })
  //   })
})

module.exports = router
