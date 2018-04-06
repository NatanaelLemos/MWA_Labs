/* jshint esversion: 6 */
/* jshint browser: true */
//use strict

const fs = require("fs");
process.on('message', (file) => {
    fs.readFile(file, 'utf-8', (err, text) => {
        if (err) throw err;
        process.send(text);
    });
});