const fs = require('fs');
const path = require('path');
var data = require('../db/db.json');

//creates new note
function createNote(body, note) {
    const content = body;
    //puts the content in the new note object
    note.push(content);
    //writes the new note to the db file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(note, null, 2)
    );

    return content;
}

//locates note based on id
function findById(id, note) {
    const result = note.filter(instance => instance.id !== id);

    return result;
  }

//pushes new data to db.json
function pushNote(note) {

};

module.exports = {
    createNote,
    findById,
    pushNote
}