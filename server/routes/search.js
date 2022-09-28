const express = require('express')

const db = require('../db/search')

const router = express.Router()

router.get('/:region', (req, res) => {
    const region = req.params.region
    db.search(region)
    .then((results) => {
        res.json(results)
    })
    .catch((err) => {
        console.error(err.message)
        res.status(500).json({ message: 'Something went wrong' })
    })
})

  router.post('/', (req, res) => {
    const  photo_url  = req.body
    const data = { photo_url }
    .then(()=> {
      db.addStory(data)
    }) 
    .then(()=> {
      db.getStories()
    })
    res.json(req.body)
  })

  
module.exports = router