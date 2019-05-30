var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname === '/readFileSync') {
        readFileSync();
    } else if (pathname === '/readFile') {
        readFile();
    } else if (pathname === '/readStream') {
        readStream();
    }
}).listen(8080);

function readFileSync() {
    var data = fs.readFileSync('big.txt', 'utf8');
    console.log(data);
    console.log('Done readFileSync');
}

function readFile() {
    fs.readFile('big.txt', 'utf8', function(err, data) {
        console.log(data);
    });
    console.log('Done readFile');
}

function readStream() {
    var readable = fs.createReadStream('big.txt', 'utf8');
    readable.on('data', function(chunk) {
        console.log(chunk);
    });
    console.log('Done readStream');
}
