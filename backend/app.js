'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// load route files


// middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// routes
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1> Home Page </h1>"
    )
});


app.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hello World!"
    })
});

// export
module.exports = app;