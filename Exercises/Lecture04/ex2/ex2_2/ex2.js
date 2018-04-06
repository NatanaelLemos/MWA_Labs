/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict
    const os = require('os');
    const Rx = require('@reactivex/rxjs');

    const subject = Rx.Observable.create((observer) => {
        observer.next('Checking your system...');

        const errors = [];
        if (os.freemem() < 204800000) {
            errors.push('This app needs at least 2 GB of RAM');
        }

        if (os.cpus().length < 2) {
            errors.push('Processor is not supported');
        }

        if (errors.length) {
            observer.error(errors.join('\n'));
        }else{
            observer.next('System is checked successfully.');
        }

        observer.complete();
    });

    subject.subscribe((next) => {
        console.log(next);
    }, (err) => {
        console.log(err);
    });
})();