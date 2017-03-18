var express =  require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index.html');
    //res.send('index page');
});

module.exports = router;