const express = require('express')

const db = require('../db/stories')
const checkJwt = require('../auth0')


const router = express.Router()

router.get('/', (req, res) => {
    db.getAllUserSavedStories()
  .then((result)=>{
    res.json(result)
  }) .catch ((err) => {
    console.error(err.message)
    })
  })
router.get('/:auth0_id', (req, res) => {
  const id = req.params.auth0_id
  db.getUserSavedStories(id)
  .then((result)=>{
  res.json(result)
  }) .catch ((err) => {
  console.error(err.message)
  })
})
router.post('/', async (req, res) => {
  try {
      const { story_id, auth0_id } = req.body
      const data = {story_id, auth0_id}
      const idArr = await db.addSavedStory(data)
    const savedStoryArr = await db.getAllUserSavedStories()
    console.log(req.body)

    res.json(savedStoryArr)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const deleteSaved = await db.deleteSaved(id)
    res.json(deleteSaved)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

module.exports = router

