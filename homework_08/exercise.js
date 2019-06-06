var mongo = require('mongodb');
var express = require('express');

var MongoClient = require('mongodb').MongoClient;

// create db
var initialUrl = "mongodb://localhost:27017/places"; 
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
    var dbo = db.db("places");
    // create collection
    dbo.createCollection("locations", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });  
    // create documents
    var point = [{
            _id: 1,
            name: "Utopia Park",
            category: "Housing",
            location: [-91.960075, 41.024858]
        },
        {
            _id: 2,
            name: "Waterworks Park",
            category: "Park",
            location: [-91.954448, 41.019295]
        },
        {
            _id: 3,
            name: "Evergreen Cemetery",
            category: "Cemetery",
            location: [-91.956960, 41.014809]
        },
        {
            _id: 4,
            name: "Jefferson County Little League",
            category: "Park",
            location: [-91.949349, 41.005807]
        },
        {
            _id: 5,
            name: "Chautauqua Park",
            category: "Park",
            location: [-91.944826, 41.008540]
        },
        {
            _id: 6,
            name: "Forest Park",
            category: "Park",
            location: [-91.951894, 41.008068]
        }];
    dbo.collection("locations").insertMany(point, function(err, res) {
        if (err) throw err;
        console.log("Documents inserted");
        db.close();
    });
    dbo.collection("locations").createIndex({location: '2d'});
});

app.use(express.json());

app.use('/locations', (req, res, next) => {
    client.connect(function(err) {
        if (err) throw err;
        var dbo = client.db("places");
        req.collection = dbo.collection("locations");
        next();
    });
});

app.get('/locations/search/:category/:name?', (req, res, next) => {
    var query;
    if (req.params.name == undefined) {
        query = {};
    } else {
        query = {name: String(req.params.name)};
    }
    req.collection.find({$and: [{category: String(req.params.category)}, query, 
        {location: {$near: [-91.9665342, 41.017654]}}]})
        .project({name: 1, category: 1})
        .limit(3)
        .toArray(function(err, result) {
            if (err) throw err;
            res.status(200).send(result);
            client.close();
    });     
});

app.post('/locations', (req, res, next) => {
    var point = req.body;
    req.collection.insertOne(point, function(err, result) {
        if (err) throw err;
        res.status(201).send(result);
        client.close();
    });
});

app.listen(8080);
