var express = require('express');
var axios = require('axios');
var { Observable, from } = require('rxjs');
var { shareReplay } = require('rxjs/operators');

var app = express();

app.get('*', function(req, res) {
    var observer = from(axios.get('https://randomuser.me/api/?results=10; rel="last"'))
        .pipe(shareReplay(1));
    observer.subscribe(data => console.log('1st request'));
    observer.subscribe(data => console.log('2nd request'));
    res.end();
});

app.set('trust proxy', false);

app.enable('case sensitive routing');
app.set('strict routing', true);

app.listen(8080);
