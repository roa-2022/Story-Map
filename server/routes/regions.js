const express = require('express')

const db = require('../db/regions')

const router = express.Router()


router.get('/', async (req, res) => {
  try {
    const regionsArr = await db.getRegions()
    res.json(regionsArr)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})




module.exports = router