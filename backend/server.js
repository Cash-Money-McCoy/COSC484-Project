// Development or Production build?
//const environment = process.env.NODE_ENV || 'development';

// Express Routes
const express = require('express');
const app = express();
//const path = require('path');

// Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Automatically allow cross-origin requests
const cors = require('cors');
app.use(cors({ origin: true }));

// API
const apiRoute = require('./api.route');
app.use('/', apiRoute);

// PORT
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port);
});

