const visitRoutes = (app, fs) => {
  const dataPath = './data/data.json';

  //read
  app.get('/visits', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
};
module.exports = visitRoutes;
