const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const domainsRouter = require('../domains/domains-router');

const server = express();

//middleware
server.use(bodyParser.json());
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));

//Routes endpoints
server.use('/api', domainsRouter);
// const routes = require('../domains/domains-router.js')(app, fs);
server.get('/', (req, res) => {
  res.send({ message: 'Welcome to the development api-server' });
});

module.exports = server;
