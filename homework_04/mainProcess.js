var fs = require('fs');

process.on('message', (filename) => {
    fs.readFile(filename, function(err, data) {
        if (err) {
          return;
        }  
        process.send(data.toString());
    });        
});
