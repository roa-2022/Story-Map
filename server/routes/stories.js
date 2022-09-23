const express = require('express')
const checkJwt = require ('../auth0')

const db = require('../db/stories')
const router = express.Router()

router.get('/', (req, res) => {
  db.getStories()
    .then((data) => {
      res.json(data)
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

// Add Story

router.post('/',checkJwt, async (req, res) => {
  try {
    const auth0_id = req.user?.sub

    const { title, author, synopsis, story_text } = req.body
    const { region_id } = req.body

    const storyData = { title, author, synopsis, story_text, auth0_id }

    const idArr = await db.addStory(storyData)
    const storyId = idArr[0]

    const idObj = {
      story_id: storyId,
      region_id: region_id,
    }
    await db.addStoryRegions(idObj)

    getNewStory = await db.getOneStory(storyId)

    res.json(getNewStory)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
