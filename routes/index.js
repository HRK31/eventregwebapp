var express = require('express');
var router = express.Router();
var path = require('path');
var fs=require('fs');
router.use(express.static(__dirname+"./public/"));



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ title: 'Express' });
});



/*GET form registration page*/
router.get('/form',function(req,res){
  res.render('form');
});


//form submission
var bodyParser=require("body-parser"); 

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/eventreg'); 
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) ;

router.use(bodyParser.json()); 
router.use(express.static('public')); 
router.use(bodyParser.urlencoded({ 
	extended: true
}));

/* GET home page. */
/*router.post("/upload", uploadFile,()=>{
  console.log("Uploaded successfully");
});*/
router.post('/submit', function(req,res){ 
  
  //console.log(req.file.filename + "uploaded successfully");
  req.body.created_at = new Date();
  db.collection('details').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
  })
	return res.render('signup_success');
}) 



module.exports = router;
