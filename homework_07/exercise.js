var mongo = require('mongodb');
var express = require('express');

var MongoClient = require('mongodb').MongoClient;

// create db
var initialUrl = "mongodb://localhost:27017/homework07"; 
MongoClient.connect(initialUrl, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

var url = "mongodb://localhost:27017/"; 
var app = express();

var client = new MongoClient(url);

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("homework07");
    // create collection
    dbo.createCollection("lectures", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });  
    // create documents
    var lecture = [{
            _id: 1,
            course: "MWA",
            lecture: "ECMA6"
        },
        {
            _id: 2,
            course: "MWA",
            lecture: "NodeJS"
        },
        {
            _id: 3,
            course: "MWA",
            lecture: "Express"
        }];
    dbo.collection("lectures").insertMany(lecture, function(err, res) {
        if (err) throw err;
        console.log("Documents inserted");
        db.close();
    });
});

app.use(express.json());

app.use('/lectures', (req, res, next) => {
    client.connect(function(err) {
        if (err) throw err;
        var dbo = client.db("homework07");
        req.collection = dbo.collection("lectures");
        next();
    });
});

app.get('/lectures/search/:q', (req, res, next) => {
    var q = req.params.q;
    req.collection.findOne({$or: [{_id: Number(q)}, {course: String(q)}, {lecture: String(q)}]}, function(err, result) {
        if (err) throw err;
        res.status(200).send(result);
        client.close();
    }); 
});

app.get('/lectures', (req, res, next) => {
    req.collection.find({}).toArray(function(err, result) {
        if (err) throw err;
        res.status(200).send(result);
        client.close();
    });     
});

app.post('/lectures', (req, res, next) => {
    var lecture = req.body;
    req.collection.insertOne(lecture, function(err, result) {
        if (err) throw err;
        res.status(201).send(result);
        client.close();
    });
});

app.delete('/lectures/:id', (req, res, next) => {
    client.connect(function(err) {
        if (err) throw err;
        var dbo = client.db("homework07");
        collection = dbo.collection("lectures");
        var id = Number(req.params.id);
        collection.deleteOne({_id: id}, function(err, result) {
            if (err) throw err;
            res.status(200).send();
            client.close();
        }); 
    }); 
});

app.listen(8080);
