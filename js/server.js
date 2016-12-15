/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// enable CORS since we're running two servers

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

let fewestGuesses = Infinity;
app.get('/fewest-guesses', function(req, res) {
  // implement response here
});

app.post('/fewest-guesses', function(req, res) {
  // update fewestGuesses here
  // remember to compare it to the current guesess to determine which is lowest
});

const PORT = 8081;
app.listen(PORT, function() {
  console.log('Example app listening on localhost:' + PORT);
});
