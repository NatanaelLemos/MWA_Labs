/* jshint esversion: 6 */
/* jshint browser: true */

(() => {
    //use strict
    const items = Array.from(document.querySelectorAll('[data-time]'));

    console.log('Filter the elements that contain the word ECMA6');
    console.log(
        items.filter(i => i.innerText.includes('ECMA6'))
    );

    console.log('Map down to a list of time');
    console.log(
        items.map(i => i.dataset.time)
    );

    console.log('Map to an array of seconds');
    console.log(
        items.map(i =>
            i.dataset.time
            .split(':')
            .reduce((sum, time) => (sum * 60) + parseInt(time))
        )
    );

    console.log('Reduce to get total time');
    console.log(
        items
            .map(i =>
                i.dataset.time
                .split(':')
                .reduce((sum, time) => (sum * 60) + parseInt(time))
            )
            .reduce((sum, secs) => sum += secs)
    );

})();