const visitRoutes = (app, fs) => {
  const dataPath = './data/data.json';

  //read from json file
  app.get('/api/visits', async (req, res) => {
    try {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw Error('404');
        }
        res.status(200).send(JSON.parse(data));
      });
    } catch (err) {
      if (err.toString() === 'Error: 404') {
        return res.status(400).JSON({ message: 'Site not found' });
      } else {
        return res.status(500).JSON({
          message: 'Something is wrong with the server. Try again later.',
        });
      }
    }
  });
  app.get('/api/visits/:date', async (req, res) => {
    const data = require('../data/data.json');
    try {
      //Pull date out of URL parameter
      const { date } = req.params;
      console.log('hello', date);

      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const filteredData = data.filter(
        (site) => date == site.date.split('T')[0]
      );
      console.log(filteredData);
      const sitesPerDay = filteredData.map((site) => {
        return site.domain;
      });
      if (err) {
        throw Error('404');
      }

      res.status(200).json({ date: sitesPerDay });
    } catch (err) {
      if (err.toString() === 'Error: 404') {
        return res.status(400).JSON({ message: 'Site not found' });
      } else {
        return res.status(500).JSON({
          message: 'Something is wrong with the server. Try again later.',
        });
      }
    }
  });
};
module.exports = visitRoutes;
