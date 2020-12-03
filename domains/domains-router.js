const visitsRouter = require('./visits');
const router = (app, fs) => {
  app.get('./', (req, res) => {
    res.send('Welcome to the development api-server');
  });
  visitsRouter(app, fs);
};

module.exports = router;
