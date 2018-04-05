/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict
    var fs = require('fs');
    var zlib = require('zlib');
    var http = require('http');

    var gzip = zlib.createGzip();
    var readable = fs.createReadStream("ex2.jpg");
    var compressed = fs.createWriteStream('ex2.gz');
    
    //compress
    readable.pipe(gzip).pipe(compressed);
    
    http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'image/jpg'
        });

        //uncompress
        fs.readFile('ex2.gz', (err, data) => {
            zlib.gunzip(data, (err, uncompressed) => {
                res.end(uncompressed);
            });
        });

    }).listen(4000, '127.0.0.1');

})();