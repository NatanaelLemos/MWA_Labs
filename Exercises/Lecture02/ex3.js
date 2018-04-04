/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict

    // Fix the slow function to be asynchronous/non-blocking 
    function slow(callback) {
        for (let i = 0; i <= 5e8; i++) {}

        if (Math.random() > 0.5) {
            return callback("Error", null);
        }

        return callback(null, {
            id: 12345
        });
    }

    function exec(fn) {
        // Complete the code here to implement chaining with callback 
        this.done = (doneFn) => {
            this._doneFn = doneFn;
            return this;
        };

        this.fail = (failFn) => {
            this._failFn = failFn;
            return this;
        };

        setImmediate(() => {
            fn((type, obj) => {
                if (type === 'Error') {
                    this._failFn(obj);
                } else {
                    this._doneFn(obj);
                }
            });
        });

        return {
            done: this.done,
            fail: this.fail
        };
    }

    exec(slow)
        .done(function (data) {
            console.log(data);
        })
        .fail(function (err) {
            console.log("Error: " + err);
        });

})();