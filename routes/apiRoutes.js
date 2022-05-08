//import fs, uniqid; start instance of express
const fs = require('fs');
const app = require('express');
const uniqid = require('uniqid');

//import json data
const data = require('../db/db.json');

//retrives existing data
app.get('/api/notes', (req, res) => {
    res.json(data);
});

//posts new data
app.post("/api/notes", (req, res) => {
    //gives unique id for request
    req.body.id = uniqid();
    notes.push(req.body);
    //writes data
    fs.writeFileSync(
        path.join(__dirname, "./db/db.json"),
        JSON.stringify(data, null, 2)
    );
    //returns the newly written data
    res.json(data);
});





module.exports = router;
