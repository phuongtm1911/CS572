const express = require('express');
const randtoken = require('rand-token');

const app = express();

app.use((req, res, next) => {
    var token = req.headers.token;
    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                res.status(403).send({
                    success: false, 
                    message: "Failed to authenticate user"
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(403).send({
            success: false,
            message: "No token provided"
        });
    }
});

app.get('/token', (req, res) => {
    var token = randtoken.generate(16);
    res.send(token);
});

app.listen(8080, () => {
    console.log('Server started!');
});