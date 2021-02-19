var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var db = require('../database-mongo');

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items/:style', function (req, res) {
  // console.log('req',req.params.style)
  let styleArr=req.params.style;
  if(styleArr!=='undefined'){
    styleArr = req.params.style.split(',');
    // console.log('sever1',styleArr)
  }
  // console.log('sever2', styleArr)
  db.selectAll(styleArr, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(data);
    }
  });
});

app.post('/items', function (req, res) {
  // console.log(req.body)
  db.saveRecipe(req.body, function(err, results) {
    if(err) {
      res.sendStatus(500);
    } else {
      // res.send(data);
      // console.log('sucees', results)
      res.status(200).send(results)
    }
  });
});

app.delete('/items/:item', function (req, res) {
  // console.log(req.params)
  let data=req.params;
  db.deleteRecipe(data, function(err, results) {
    if(err) {
      res.sendStatus(500);
    } else {
      // res.send(data);
      // console.log('sucees', results)
      res.status(200).send(results)
    }
  });
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

