const db = require('../data/data.json');

module.exports = {
  find,
};

function find() {
  return db('data.json');
}
