/*jshint esversion: 6 */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// enable CORS since we're running two servers

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

var fewestGuesses = 100000; // meaning no high score on record

app.get('/fewest-guesses', function(req, res) {
  return res.status(200).json({
    fewestGuesses: fewestGuesses
  });
});

app.post('/fewest-guesses', function(req, res) {
  var submittedScore = req.body.fewestGuesses;

  if (submittedScore < fewestGuesses) {
    fewestGuesses = submittedScore;
    return res.status(200).json({
      message: 'New record'
    });
  }

  return res.status(200).json({
    message: 'No new record'
  });
});

var PORT = 8081;
app.listen(PORT, function() {
  console.log('Example app listening on localhost:' + PORT);
});
