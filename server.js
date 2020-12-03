const express = require('express');

const bodyParser = require('body-parser');

const app = express();

//Load up node's built in file system helper library to serve our JSON file
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./domains/domains-router.js')(app, fs);

const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});
