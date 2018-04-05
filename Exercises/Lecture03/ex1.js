/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict
    const dns = require('dns');

    dns.resolve4("www.mum.edu", (err, address) => {
        console.log(`IPv4: ${address}`);
    });
})();