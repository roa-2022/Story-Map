const express = require('express')

const db = require('../db/search')

const router = express.Router()

router.get('/eng/:region', (req, res) => {
    const region = req.params.region
    db.searchEnglish(region)
    .then((results) => {
        res.json(results[0])
    })
    .catch((err) => {
        console.log(err.message)
        res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/maori/:region', (req, res) => {
    const region = req.params.region
    db.searchMaori(region)
      .then((results) => {
        res.json(results[0])
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ message: 'Something went wrong' })
      })
  })

module.exports = router
