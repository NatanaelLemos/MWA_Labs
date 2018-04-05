/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict
    const http = require('http');
    const fs = require("fs");

    http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'image/jpg'
        });

        /*
            Artillery report @ 19:36:18(-0500) 2018-04-04
            Scenarios launched:  20
            Scenarios completed: 20
            Requests completed:  200
            Request latency:
                min: 3.3
                max: 1863.6
                median: 800.7
         */
        // const src = fs.createReadStream("ex2.jpg");
        // src.pipe(res);

        /*
            This is the fastest:
            Artillery report @ 19:32:50(-0500) 2018-04-04
            Scenarios launched:  20
            Scenarios completed: 20
            Requests completed:  200
            Request latency:
                min: 3.5
                max: 1701.5
                median: 612.9
        */
        fs.readFile("ex2.jpg", (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }).listen(4000, '127.0.0.1');
})();