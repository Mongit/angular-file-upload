var express = require('express');
var router = express.Router();
var Busboy = require('connect-busboy');
var fs = require('fs'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    req.busboy.on('file', function(fieldname, file, filename,  encoding, mimetype) {
        file.on('data', function(data) {
            fs.writeFile(__dirname + '/../public/shared/' + filename, data);
        });
        file.on('end', function() {
            console.log('File' + filename + ' is ended');
        });
        
    });
    
    req.busboy.on('finish', function() {
        console.log('Busboy is finished');
        res.send({data: 'Imagen se descargo exitosamente'});
    });
    
    req.pipe(req.busboy);
});

module.exports = router;
