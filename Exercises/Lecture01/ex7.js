/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict

    Array.prototype.bubbleSort = function () {
        return this.sort((a, b) => a -b);
    }
    
    console.log(
        [6, 4, 0, 3, -2, 1].bubbleSort()
    );
})();