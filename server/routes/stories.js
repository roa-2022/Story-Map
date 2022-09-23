const express = require('express')

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

// Add Story

router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newData =  [data.author, data.title, data.synopsis, data.story_text]
    console.log(data)  
    const idArr = await db.addStory(req.body)
    console.log('idArr', idArr)

    // let addedStory = await db.getOneStory(id)
    res.status(200)
    // res.json(idArr)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})



module.exports = router
