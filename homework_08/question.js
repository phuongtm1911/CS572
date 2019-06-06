var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;

// create db
// var initialUrl = "mongodb://localhost:27017/homework08"; 
// MongoClient.connect(initialUrl, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });

var url = "mongodb://localhost:27017/"; 

var client = new MongoClient(url);

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("homework08");
    // create collection
    // dbo.createCollection("restaurants", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     db.close();
    // });  

    var c = dbo.collection("restaurants");
    
    // Query 1
    c.find()
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Display all the documents in the collection restaurants');
            console.log(result);
    });

    // Query 2
    c.find()
        .project({restaurant_id: 1, name: 1, district: 1, cuisine: 1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Display the fields restaurant_id, name, district and cuisine for all the documents in the collection restaurants');
            console.log(result);
    });

    // Query 3
    c.find()
        .project({_id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Display the fields restaurant_id, name, district and cuisine but exclude the field _id for all the documents in the collection restaurants');
            console.log(result);
    });

    // Query 4
    c.find()
        .project({_id: 0, restaurant_id: 1, name: 1, district: 1, "address.zipcode": 1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Display the fields restaurant_id, name, district and zipcode but exclude the field _id for all the documents in the collection restaurants');
            console.log(result);
    });

    // Query 5
    c.find({district: "Bronx"})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Display all the restaurant which is in the district Bronx');
            console.log(result);
    });

    // Query 6
    c.find({district: "Bronx"})
        .limit(5)
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Display the first 5 restaurants which are in the district Bronx');
            console.log(result);
    });

    // Query 7
    c.find({district: "Bronx"})
        .skip(5).limit(5)
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Display the next 5 restaurants after skipping the first 5 which are in the district Bronx');
            console.log(result);
    });

    // Query 8
    c.find({"address.coord": {$lt: -95.754168}})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Find the restaurants which locate in coord value less than -95.754168');
            console.log(result);
    });

    // Query 9
    c.find({$and: [{cuisine: {$not: {$regex: "American"}}}, 
            {"grades.score": {$gt: 70}}, 
            {"address.coord": {$lt: -65.754168}}]})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Find the restaurants that do not prepare any cuisine of American and their grade score more than 70 and coord value less than -65.754168');
            console.log(result);
    });
    
    // Query 10
    c.find({name: {$regex: "^Wil.*"}})
        .project({restaurant_id: 1, name: 1, district: 1, cuisine: 1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Find restaurant_id, name, district and cuisine for those restaurants which contains Wil as first three letters for its name');
            console.log(result);
    });

    // Query 11
    c.find({name: {$regex: "ces$"}})
        .project({restaurant_id: 1, name: 1, district: 1, cuisine: 1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Find restaurant_id, name, district and cuisine for those restaurants which contains ces as last three letters for its name');
            console.log(result);
    });

    // Query 12
    c.find({name: {$regex: "Reg"}})
        .project({restaurant_id: 1, name: 1, district: 1, cuisine: 1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Find restaurant_id, name, district and cuisine for those restaurants which contains Reg as three letters somewhere in its name');
            console.log(result);
    });

    // Query 13
    c.find({$and: [{district: "Bronx"}, 
            {$or: [{cuisine: "American "}, {cuisine: "Chinese"}]}]})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Find the restaurants which belong to the district Bronx and prepared either American or Chinese dish');
            console.log(result);
    });

    // Query 14 
    c.find({$or: [{district: "Staten Island"}, 
            {district: "Queens"},
            {district: "Bronx"},
            {district: "Brooklyn"}]})
        .project({restaurant_id: 1, name: 1, district: 1, cuisine: 1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Find restaurant_id, name, district and cuisine for those restaurants which belongs to the district Staten Island or Queens or Bronx or Brooklyn');
            console.log(result);
    });

    // Query 15
    c.find({$and: [{district: {$not: {$regex: "Staten Island"}}}, 
            {district: {$not: {$regex: "Queens"}}},
            {district: {$not: {$regex: "Bronx"}}},
            {district: {$not: {$regex: "Brooklyn"}}}]})
        .project({restaurant_id: 1, name: 1, district: 1, cuisine: 1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Find restaurant_id, name, district and cuisine for those restaurants which are not belonging to the district Staten Island or Queens or Bronx or Brooklyn');
            console.log(result);
    });

    // Query 16 
    c.find({"grades.score": {$not: {$gt: 10}}})
        .project({restaurant_id: 1, name: 1, district: 1, cuisine: 1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Find restaurant_id, name, district and cuisine for those restaurants which achieved a score which is not more than 10');
            console.log(result);
    });

    // Query 17
    c.find({$and: [{"address.coord.1": {$gt: 42}},
            {"address.coord.1": {$lte: 52}}]})
        .project({restaurant_id: 1, name: 1, address: 1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Find restaurant_id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and up to 52');
            console.log(result);
    });

    // Query 18
    c.find()
        .sort({name: 1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Arrange the name of restaurants in ascending order along with all the columns');
            console.log(result);
    });

    // Query 19
    c.find()
        .sort({name: -1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Arrange the name of restaurants in descending order along with all the columns');
            console.log(result);
    });

    // Query 20
    c.find()
        .sort({cuisine: 1, district: -1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Arrange the name of cuisine in ascending order and for those same cuisine district should be in descending order');
            console.log(result);
    });

    // Query 21
    c.find({"address.coord": {$type: "double"}})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Select all documents in the restaurants collection where the coord field value is Double');
            console.log(result);
    });

    // Query 22
    c.find({name: {$regex: "^Mad.*"}})
        .project({name: 1, district: 1, "address.coord": 1, cuisine: 1})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('Find name, district, longitude and latitude and cuisine for those restaurants which contains Mad as first three letters of its name');
            console.log(result);
    });

    db.close();
});

 