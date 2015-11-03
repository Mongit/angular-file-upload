var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    console.log(req.busboy);
    req.busboy.on('file', function(fieldname, file, filename,  encoding, mimetype) {
        console.log(fieldname);
    });
});

module.exports = router;
