/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict

    /*
    Define a filter function on the String object. The function accepts an array of strings that specifies a list of banned words.
    */
    String.prototype.filter = function (...banned) {
        let newStr = this;
        for (const word of banned) {
            while (newStr.indexOf(word) >= 0) {
                newStr = newStr.replace(word, '***');
            }
        }

        return newStr;
    };

    console.log(
        "this house is nice!".filter('house', 'nice')
    );
})();