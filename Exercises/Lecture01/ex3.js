/* jshint esversion: 6 */
/* jshint browser: true */

(() => {
    //use strict

    console.log('Given the array, use array filter and an arrow function to create an array of numbers greater than 70');
    const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
    console.log(
        numbers.filter(n => n > 70)
    );
})();