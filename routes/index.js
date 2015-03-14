var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	res.render('/index.html');
});

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    /*var db = req.db;
    db.collection('userlist').find().toArray(function (err, items) {
        res.json(items);
    });*/
	res.send('userlist');
});

module.exports = router;