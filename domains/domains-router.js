const express = require('express');
const Domains = require('./domain-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Domains.find()
    .then((domains) => {
      res.json(domains);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get domains' });
    });
});

module.exports = router;
