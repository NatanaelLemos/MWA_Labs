/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict
    const os = require('os');

    checkSystem();

    function checkSystem() {
        console.log('Checking your system...');

        let error = false;

        if (os.freemem() < 204800000) {
            console.log('This app needs at least 2 GB of RAM');
            error = true;
        }

        if (os.cpus().length < 2) {
            console.log('Processor is not supported');
            error = true;
        }

        if (!error) {
            console.log('System is checked successfully.');
        }
    }
})();