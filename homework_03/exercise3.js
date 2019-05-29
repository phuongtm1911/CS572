var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFileSync('big.file');
}).listen(8080);

http.createServer(function (req, res) {
    fs.readFile('big.file', function(err, data) {
        console.log(data);
    });
}).listen(8080);

http.createServer(function (req, res) {
    var readable = fs.createReadStream('big.file');
    readable.on('data', function(chunk) {
        console.log(chunk.length);
    });
}).listen(8080);