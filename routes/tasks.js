var express =  require('express');
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs('@localhost:27017/single1', ['tasks']);

//get all tasks data
router.get('/tasks', function (req, res, next) {
    console.log('tasks page found');
    db.tasks.find(function (err, tasks) {
        if(err){
            res.send('some error found', + err);
        }
        res.json(tasks);
    });
});

//get single tasks data
router.get('/task/:id', function (req, res, next) {
    console.log('single task page found of id', req.params.id);
    db.tasks.findOne({_id : mongojs.ObjectID(req.params.id)},function (err, tasks) {
        if(err){
            res.send('some error found', + err);
        }
        res.json(tasks);
    });
});

//save tasks
router.post('/task', function (req, res, next) {
    var task =  req.body;
    if(!task.title){
        res.status(400);
        res.json({
            "error" : "bad data"
        });
    }else {
        db.tasks.save(task, function (err, task) {
            if(err){
                res.send(err);
            }else {
                res.json(task);
            }
        })
    }
})

// Delete task
//get single tasks data
router.delete('/task/:id', function (req, res, next) {
    console.log('single task page found of id', req.params.id);
    db.tasks.remove({_id : mongojs.ObjectID(req.params.id)},function (err, tasks) {
        if(err){
            res.send('some error found', + err);
        }
        res.json(tasks);
    });
});

//Update task
router.put('/task/:id', function (req, res, next) {
    var task = req.body;
    var updTask = {};

    if(task.isDone){
        updTask.isDone = task.isDone;
    }

    if(task.title){
        updTask.title = task.title;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error" :  "bed data"
        });
    }else {
        db.tasks.update({_id : mongojs.ObjectID(req.params.id)}, updTask, {},function (err, tasks) {
            if(err){
                res.send('some error found', + err);
            }
            res.json(tasks);
        });
    }

    console.log('single task page found of id', req.params.id);
});

module.exports = router;