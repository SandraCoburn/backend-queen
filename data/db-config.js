const knex = require('knex');

const knexConfig = require('./data.json');

module.exports = knex(knexConfig.development);
