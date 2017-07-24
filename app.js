const express = require('express');
const app = express();
app.get('/', function(req, res) {
  res.send('hello world');
  console.log('hello world');
});
app.listen('8808');
