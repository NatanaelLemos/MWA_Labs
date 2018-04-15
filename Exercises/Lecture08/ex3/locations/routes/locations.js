var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

//db.locations.createIndex({ location: '2d' })
//{ "name": "Cider House", "category": "Restaurant", "longitude": -91.9689232, "latitude": 41.0076638 }
//{ "name": "Maharishi University of Management", "category": "School", "longitude": -91.96729060, "latitude": 41.0178238 }
//{ "name": "Istanbul Grill", "category": "Restaurant", "longitude": -91.9689232, "latitude": 41.0076638 }

router.get('/', function (req, res, next) {
    req.db.collection('locations').aggregate([
        { $group: { _id: '$category' }},
        { $project: { name: '$_id' } }
    ]).toArray(function (err, data) {
        res.render('locations', {
            categories: data
        });
    });
});

router.get('/search', function (req, res, next) {
    console.log(req.query.category);
    req.db.collection('locations').find({
        location: {
            $near: [
                parseInt(req.query.longitude),
                parseInt(req.query.latitude)
            ]
        },
        category: req.query.category
    }).limit(3).toArray(function (err, data) {
        res.json({
            locations: data ? data : []
        });
    });
});

router.post('/', function (req, res, next) {
    req.db.collection('locations').insert({
        name: req.body.name,
        category: req.body.category,
        location: [
            parseInt(req.body.longitude),
            parseInt(req.body.latitude)
        ]
    }, function (err, ins) {
        res.json({
            created: 1
        });
    });
});

router.put('/:id', function (req, res, next) {
    const id = ObjectID(req.params.id);
    req.db.update({
            _id: id
        }, {
            $set: {
                name: req.body.name,
                category: req.body.name,
                location: [
                    req.body.longitude,
                    req.body.latitude
                ]
            }
        },
        function (err, upd) {
            res.json({
                updated: 1
            });
        })
});

router.delete('/:id', function (req, res, next) {
    const id = ObjectID(req.params.id);
    req.db.remove({
        _id: id
    }, function (err, del) {
        res.json({
            deleted: 1
        });
    });
});

module.exports = router;