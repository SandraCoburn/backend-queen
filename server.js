const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const domainsRouter = require('');

const server = express();

server.use(helmet());
server.use(express.jsoon());
server.use(cors());

server.use('/api/domains', domainsRouter);

module.exports = server;
