var express = require('express');
var path = require('path');
var cars = require('./routes/cars');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = require('mongodb').MongoClient;

let db;

app.use(async (req, res, next) => {
    if (!db) {
        await client.connect();
        db = client.db('asaad').collection('cars');
        req.db = db;
    } else {
        req.db = db;
        next();
    }
})

app.use('/cars', cars);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message, 
        error: {}
    });
});
app.listen(3000);
