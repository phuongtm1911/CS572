var express = require('express');
var axios = require('axios');
var { Observable, from } = require('rxjs');
var { shareReplay } = require('rxjs/operators');

var app = express();

app.use(express.json());
app.set('trust proxy', true);
app.enable('case sensitive routing');
app.set('strict routing', true);

app.get('/users', function(req, res) {
    var observer = from(axios.get('https://randomuser.me/api/?results=10'))
        .pipe(shareReplay(1));
    observer.subscribe(response => { 
        res.set("Cache-Control", "private, max-age=86400");
        res.set('Link', 'https://randomuser.me/api/?results=10;rel="first"');
        res.send(response.data);
    });
});

app.listen(8080);
