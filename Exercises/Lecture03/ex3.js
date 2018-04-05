/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict
    const EventEmitter = require("events");

    class Clock extends EventEmitter {
        constructor() {
            super();
            setInterval(() => this.emit('tick'), 1000);
        }
    }

    const clock = new Clock();
    clock.addListener('tick', () => console.log("woohoo"));
})();