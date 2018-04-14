/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict
    const fs = require("fs");
    fs.writeFile('students.txt', 'Hello World', function(err){
        if(err) throw err;
        console.log('done');
    });
})();
