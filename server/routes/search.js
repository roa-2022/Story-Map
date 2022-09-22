const express = require('express')

const db = require('../db/search')

const router = express.Router()

router.get('/:regioneng', (req, res) => {
    const region = req.params.regioneng
    db.searchEnglish(region)
    .then((results) => {
        res.json(results)
    })
    .catch((err) => {
        console.log(err.message)
        res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/:regionmaori', (req, res) => {
    const region = req.params.regionmaori
    db.searchMaori(region)
      .then((results) => {
        res.json(results)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ message: 'Something went wrong' })
      })
  })

module.exports = router
