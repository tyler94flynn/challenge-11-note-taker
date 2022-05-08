//import express, start express instance
const express = require('express');
const app = express();
const port = 3000;

//import api & html routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

