'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portfolio')
    .then(() => {
        console.log('It works Mongo!');

        // server creation
        app.listen(port, () => {
            console.log('Server up in localhost:3700 url')
        });

    })
    .catch(error => console.log(error));