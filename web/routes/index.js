var express = require('express');
var router = express.Router();
var Busboy = require('connect-busboy');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    console.log(req.busboy);

    req.busboy.on('file', function(fieldname, file, filename,  encoding, mimetype) {
        
        console.log('\n\n\nTHIS IS A FILE');
    });
    
    req.pipe(req.busboy);
});

module.exports = router;
