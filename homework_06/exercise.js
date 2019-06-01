var express = require('express');
var cors = require('cors');

var app = express();

app.use(express.json());
app.use(cors());

var grades = [{
    id: 1,
    name: "Asaad Saad",
    course: "CS572",
    grade: 95
}];

app.get('https://example.com/comments', (req, res, next) => {
    res.status(200).send(grades);
});

app.get('https://example.com/comments/:id', (req, res, next) => {
    for (var i = 0; i < grades.length; i++) {
        if (req.params.id === grades[i].id) {
            res.status(200).send(grades[i]);
        }
    }
});

app.post('https://example.com/comments', (req, res, next) => {
    var grade = {
        id: grades.length,
        name: req.params.name,
        course: req.params.course,
        grade: req.params.grade
    };
    grades.push(grade);
    res.status(201).send();
});

app.delete('https://example.com/comments/:id', (req, res, next) => {
    for (var i = 0; i < grades.length; i++) {
        if (req.params.id === grades[i].id) {
            grades.splice(i, 1);
            res.status(200).send();
        }
    }
});
