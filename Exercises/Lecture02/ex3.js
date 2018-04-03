/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict

    // Fix the slow function to be asynchronous/non-blocking 
    function slow(callback) {
        setImmediate(() => {
            for (let i = 0; i <= 5e8; i++) {}

            if (Math.random() > 0.5) {
                return callback("Error", null);
            }

            callback(null, {
                id: 12345
            });
        });
    }

    function exec(fn) {
        // Complete the code here to implement chaining with callback 
        this.done = (donefn) => {
            this._donefn = donefn;
            this._execute();
            return this;
        };

        this.fail = (failfn) => {
            this._failfn = failfn;
            this._execute();
            return this;
        };

        this._execute = () => {
            if (!this._failfn || !this._donefn) {
                return;
            }

            const callback = (type, value) => {
                if (type && type === 'Error') {
                    this._failfn(value);
                } else {
                    this._donefn(value);
                }
            };

            fn(callback);
        };

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