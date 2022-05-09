//import express define port
const express = require('express');
const PORT = process.env.PORT || 3001;

//import api & html routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//start express instance
const app = express();

//setting defaults for express to use
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//use api & html routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//listening for connections
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`)
  })

