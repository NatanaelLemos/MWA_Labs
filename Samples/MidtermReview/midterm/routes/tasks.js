const express = require('express');
const mongo = require('mongodb');

const router = express.Router();

router.get('/', function (req, res) {
    req.db.collection('tasks').find({ status: 'incomplete' }).toArray(function (err, data) {
        res.render('tasks', { tasks: data });
    });
});

router.post('/', function(req, res){
    req.db.collection('tasks').insert({
        task: req.body.task,
        status: 'incomplete',
        created_date: new Date(),
        updated_date: new Date()
    }, function(err, ins) {
        res.redirect('/tasks');
    });
});

router.post('/:task_id', function(req, res){
    const id = mongo.ObjectID(req.params.task_id);
    req.db.collection('tasks').update({ _id: id }, { $set: { status: 'completed', updated_date: new Date() }}, function(err, upd){
        res.redirect('/tasks');
    });
});

router.delete('/:task_id', function(req, res){
    const id = mongo.ObjectID(req.params.task_id);
    req.db.collection('tasks').remove({ _id: id }, function(err, dl){
        res.redirect('/tasks');
    });
});

router.get('/completed', function(req, res){
    req.db.collection('tasks').find({ status: 'completed' }).toArray(function(err, data){
        res.render('tasks_completed', { tasks: data });
    });
});

module.exports = router;