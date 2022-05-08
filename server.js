//import express, start express instance
const express = require('express');
const app = express();
const port = 3000;

//import api & html routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//parsing incoming connections, displaying static page populated with data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//listening for connections
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

