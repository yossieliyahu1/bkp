
var express = require('express');
var router = express.Router();

var main = require('../server/main');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/getList', function (req, res) {
    main.getList(req, res);
});

router.post('/saveList', function (req, res) {
    main.saveList(req, res);
});

router.get('/saveList', function (req, res) {
    main.saveList(req, res);
});

module.exports = router;