const express = require('express')
const checkJwt = require('../auth0')
const db = require('../db/stories')

const router = express.Router()

router.get('/', (req, res) => {
  db.getStories()
    .then((data) => {
      res.json(data)
      // console.log(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getOneStory(id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// DELETE /api/v1/stories
router.delete('/:id', checkJwt, (req, res) => {
  const id = Number(req.params.id)
  const auth0Id = req.user?.sub

  db.userCanEdit(id, auth0Id)
    .then(() => db.deleteFruit(id))
    .then(() => db.getFruits())
    .then((fruits) => res.json({ fruits }))
    .catch((err) => {
      console.error(err)
      if (err.message === 'Unauthorized') {
        res
          .status(403)
          .send('Unauthorized: Only the user who added the fruit may update it')
      } else {
        res.status(500).send(err.message)
      }
    })
})

module.exports = router
