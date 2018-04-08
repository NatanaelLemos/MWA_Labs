/* jshint esversion: 6 */
/* jshint browser: true */
//use strict

const express = require('express');
const fs = require('fs');
const csrf = require('csurf');

const csrfProtection = csrf({
    cookie: true
});
const router = express.Router();

/* GET users listing. */
router.get('/', csrfProtection, function (req, res, next) {
    res.render('newsletter', {
        csrfToken: req.csrfToken()
    });
});

router.post('/', csrfProtection, function (req, res) {
    req.assert('email', 'Email is required').notEmpty();
    const errors = req.validationErrors();
    if (errors) {
        res.render('error', {
            errors: errors
        });
        return;
    }

    fs.appendFile('subscribers.txt', req.body.email + "\n", function () {
        res.render('thankyou', {
            email: req.body.email
        });
    });
});

module.exports = router;