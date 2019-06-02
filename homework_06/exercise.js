var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

var app = express();

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

var grades = [{
    id: 1,
    name: "Asaad Saad",
    course: "CS572",
    grade: 95
}];

app.use(morgan('combined', { stream: accessLogStream }));
app.use(express.json());
app.use(cors());

app.get('/grades', (req, res, next) => {
    res.status(200).send(grades);
});

app.get('/grades/:id', (req, res, next) => {
    for (var i = 0; i < grades.length; i++) {
        if (req.params.id === grades[i].id) {
            res.status(200).send(grades[i]);
        }
    }
});

app.post('/grades', (req, res, next) => {
    var grade = req.body;
    grades.push(grade);
    res.status(201).send();
});

app.delete('/grades/:id', (req, res, next) => {
    for (var i = 0; i < grades.length; i++) {
        if (req.params.id === grades[i].id) {
            grades.splice(i, 1);
            res.status(200).send();
        }
    }
});

app.listen(8080);
