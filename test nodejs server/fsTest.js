var fs = require('fs');
var path = require('path');
var readFile = function(filename) {
    var promise = new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
    return promise
};
readFile(path.join(__dirname, '/index.html')).then(
    function(data) {
    console.log(data.toString());
},
    function(err) {
    console.error(err);
    });
