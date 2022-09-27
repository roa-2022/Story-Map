const express = require('express')

const db = require('../db/search')

const router = express.Router()

router.get('/eng/:region', (req, res) => {
    const region = req.params.region
    db.searchEnglish(region)
    .then((results) => {
        res.json(results)
    })
    .catch((err) => {
        console.error(err.message)
        res.status(500).json({ message: 'Something went wrong' })
    })
})

router.get('/maori/:region', (req, res) => {
    const region = req.params.region
    db.searchMaori(region)
      .then((results) => {
        res.json(results)
      })
      .catch((err) => {
        console.error(err)
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

  
  // router.post('/upload', (req, res) => {
  //   if (req.files === null) {
  //   return res.status(400).json({ msg: 'No file uploaded' });
  //   }
  
  //   const file = req.files.file;
  //   console.log(file)
  //   file.mv(`${__dirname}/uploads/${file.name}`, err => {
  //     if (err) {
  //       console.error(err);
  //       return res.status(500).send(err);
  //     }
  
  //     res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  //   });
  // });

  // router.post('/upload', function(req, res) {
  //   console.log(req.files.file); // the uploaded file object
  // });
module.exports = router