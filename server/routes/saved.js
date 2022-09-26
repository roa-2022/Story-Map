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
router.get('/:id',checkJwt, (req, res) => {
    const id = req.params.id
db.getUserSavedStories(id)
.then((result)=>{
res.json(result)
}) .catch ((err) => {
console.error(err.message)
})
})
router.post('/', async (req, res) => {
    try {
  
        // const idObj = {
        //     story_id: storyId,
        //     auth0_id: auth0_id,
        // }
        // const storyId = idArr[0]
        const idArr = await db.addSavedStory(req.body)
      const savedStory = await db.getUserSavedStories(idArr)
      console.log(savedStory)

      res.json(savedStory)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

module.exports = router
