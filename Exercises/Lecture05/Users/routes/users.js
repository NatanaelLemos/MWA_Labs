/* jshint esversion: 6 */
/* jshint browser: true */
const express = require('express');
const fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');

const router = express.Router();

/* GET users listing. */
router.get('/promises', function (req, res, next) {
  fetch('http://jsonplaceholder.typicode.com/users/')
    .then(users => users.json())
    .then(json => {
      res.render('users', {
        users: json
      });
    })
    .catch((err) => {
      res.render('error', {
        message: err.message,
        error: {
          status: err.status,
          stack: err.stack
        }
      });
    });
});

router.get('/observables', function (req, res, next) {
  var subject = Rx.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/'));
  subject.subscribe(users => {
    users.json().then(json => {
      res.render('users', {
        users: json
      });
    });
  }, err => {
    res.render('error', {
      message: err.message,
      error: {
        status: err.status,
        stack: err.stack
      }
    });
  });
});

router.get('/async', (req, res, next) => {
  /* jshint ignore:start */
  const fetchAsync = async (res) => {
    try {
      const users = await fetch('http://jsonplaceholder.typicode.com/users/');
      const json = await users.json();
      res.render('users', {
        users: json
      });
    } catch (err) {
      res.render('error', {
        message: err.message,
        error: {
          status: err.status,
          stack: err.stack
        }
      });
    }
  }
  /* jshint ignore:end */
  fetchAsync(res);
});

module.exports = router;