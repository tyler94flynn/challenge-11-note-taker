//import fs, uniqid; start instance of express
const fs = require('fs');
const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');

const createNote = require('../lib/notes');
    //findById, pushNote } 

//import json data
const data = require('../db/db.json');

//retrives existing data
router.get('/notes', (req, res) => {
    res.json(data);
});

//posts new data
router.post('/notes', (req, res) => {
    //gives unique id for request
    req.body.id = uniqid();
    
    //use createNote function from notes.js
    const note = createNote(req.body, data);
    res.json(note);
});

//delete function goes here


module.exports = router;
