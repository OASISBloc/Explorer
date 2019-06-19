const express = require('express');
const path = require('path');
const app = express();
// const rp = require('request-promise');

// app.use(rp);
app.use(express.static(__dirname + '/dist'));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(process.env.PORT || 8080);
