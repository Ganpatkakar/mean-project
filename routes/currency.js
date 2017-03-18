var express =  require('express');
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs('@localhost:27017/single1', ['tasks']);

//get all tasks data
router.get('/', function (req, res, next) {
    console.log('tasks page found');
    db.tasks.find(function (err, tasks) {
        if(err){
            res.send('some error found', + err);
        }
        res.json(tasks);
    });
});