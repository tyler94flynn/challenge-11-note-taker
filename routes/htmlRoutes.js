//import path, define router object
const path = require('path');

// import json data
const data = require('../db/db.json');

//get requests for each page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });


module.exports = router;