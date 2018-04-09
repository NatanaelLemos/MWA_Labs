var express = require('express');
var crypto = require('crypto');

var router = express.Router();
var algorithm = 'aes256',
    password = 'asaadsaad';
/*
# Exercise 2 – Reveal The Secret Message! 
### 1.Using Mongo Shell, Create a collection homework7 and add one document to it with the following data (find it in Sakai): 
### {message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"} 
### 2.Write a Node application using Express that will read the above message from MongoDB, decrypt the message (use crypto), It’s encrypted with aes256 algorithm and the following key: asaadsaad 
### 3.Display the decrypted message in the browser using route (/secret). 
### 4.Upload your code to Github and submit your link in Sakai.
*/

/*
MongoDB code:
use mwaLecture07Ex2_Secret
db.homework7.insert({message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"})
*/

router.get('/', function (req, res, next) {
    const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://admin:4dm1nP455w0rd@170.255.0.17:27017', function (err, client) {
        if (err) throw err;
        const db = client.db('mwaLecture07Ex2_Secret');
        db.collection('homework7').findOne({}, function (err, doc) {
            if (err) throw err;

            res.render('secret', {
                message: decrypt(doc.message)
            });

            client.close();
        });
    });

    function decrypt(text) {
        var decipher = crypto.createDecipher(algorithm, password);
        var dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
});

module.exports = router;