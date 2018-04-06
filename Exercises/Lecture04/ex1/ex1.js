/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict
    const http = require('http');
    const url = require('url');
    const { fork } = require('child_process');

    const server = http.createServer();

    server.on('request', (req, res) => {
        const childProcess = fork('ex1_textProcess.js');
        const file = getFilePath(req);
        if(!file){
            return;
        }

        childProcess.send(file);
        childProcess.on('message', text => {
            res.end(text);
        });
    });

    server.listen(4000);

    function getFilePath(request) {
        const url = require('url').parse(request.url, true);
        return url.query.url;
    }
})();