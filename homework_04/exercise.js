var http = require('http');
var {Subject} = require('rxjs');
var url = require('url');
var fs = require('fs');
var { fork } = require('child_process');

var requests_ = new Subject();

function readFile(e) {
    var filename = url.parse(e.req.url, true).query.filename;
    var childProcess = fork('mainProcess.js');
    childProcess.send(filename);
    childProcess.on('message', (file) => {
        e.res.end(`${file}`);
        console.log('Done');
    });
}

requests_.subscribe(readFile);

http.createServer(function(req, res) {
    requests_.next({
        req: req,
        res: res
    }); 
}).listen(8080); 
