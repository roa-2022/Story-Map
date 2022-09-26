const express = require('express')
const checkJwt = require('../auth0')

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

router.post('/', checkJwt, async (req, res) => {
  try {
    const auth0_id = req.user?.sub

    const { title, author, synopsis, story_text, latitude, longitude } =
      req.body
    const { region_id } = req.body

    const storyData = {
      title,
      author,
      synopsis,
      story_text,
      latitude,
      longitude,
      auth0_id,
    }

    const idArr = await db.addStory(storyData)
    const storyId = idArr[0]

    const idObj = {
      story_id: storyId,
      region_id: Number(region_id),
    }
    await db.addStoryRegions(idObj)
    const getNewStory = await db.getOneStory(storyId)

    res.json(getNewStory)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// DELETE /api/v1/stories
router.delete('/:id', checkJwt, (req, res) => {
  const id = Number(req.params.id)
  const auth0Id = req.user?.sub

  db.userCanEdit(id, auth0Id)
    .then(() => db.deleteStory(id))
    .then(() => db.getStoriesByUser())
    .then((story) => res.json({ story }))
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

// PUT /api/v1/stories
router.put('/', checkJwt, (req, res) => {
  const { story } = req.body
  const auth0Id = req.user?.sub
  const newStory = {
    id: story.id,
    auth0_id: auth0Id,
    author: story.author,
    title: story.title,
    synopsis: story.synopsis,
    story_text: story.story_text,
    photo_url: story.photo_url,
    longitude: story.longitude,
    latitude: story.latitude,
  }

  db.userCanEdit(story.id, auth0Id)
    .then(() => db.updateStory(newStory))
    .then(() => db.getStoriesByUser())
    .then((stories) => res.json({ stories }))
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
