const visitRoutes = (app, fs) => {
  const dataPath = './data/data.json';

  /**This function will read from json file and return all data to be displayed after hitting the endpoint**/
  app.get('/api/statistics', async (req, res) => {
    try {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw Error('404');
        }
        res.status(200).send(JSON.parse(data));
      });
    } catch (err) {
      if (err.toString() === 'Error: 404') {
        return res.status(400).json({ message: 'Site not found' });
      } else {
        return res.status(500).json({
          message: 'Something is wrong with the server. Try again later.',
        });
      }
    }
  });
  /**This function will accept a date in the params to filter data and return
   *  and display only the sites visited in a given date. The return data will be in
   * an array of ke-value pairs, with key being the date and value being an array
   * of sites that have site visits for that date. **/
  app.get('/api/statistics/:date', async (req, res) => {
    const data = require('../data/data.json');
    try {
      //Pull date out of URL parameter
      const { date } = req.params;
      // Date should be input as yyyy-mm-dd
      if (date) {
        throw Error('404');
      } else {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        const filteredData = data.filter(
          (site) => date == site.date.split('T')[0]
        );

        const sitesPerDay = filteredData.map((site) => {
          return site.domain;
        });
        const formattedReturn = { [date]: sitesPerDay };
        res.status(200).json(formattedReturn);
      }
    } catch (err) {
      if (err.toString() === 'Error: 404') {
        return res
          .status(400)
          .json({ message: 'You need to input a valid date' });
      } else {
        return res.status(500).json({
          message: 'Something is wrong with the server. Try again later.',
        });
      }
    }
  });
  /**This function will accept one date in the params to filter data. It will return
   *  and display the total amount of visitors to all sites for that specific date **/
  app.get('/api/statistics/visitors/:date', async (req, res) => {
    const data = require('../data/data.json');
    try {
      //Pull dates out of URL parameter
      const { date } = req.params;
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const filteredData = data.filter(
        (site) => date == site.date.split('T')[0]
      );

      const sitesPerDay = filteredData.reduce((total, site) => {
        return { visitors: total.visitors + site.visitors };
      });
      console.log('total', sitesPerDay);

      res.status(200).json({ 'Average number of visitors ': sitesPerDay });
    } catch (err) {
      if (err.toString() === 'Error: 404') {
        return res.status(400).json({ message: 'Site not found' });
      } else {
        return res.status(500).json({
          message: 'Something is wrong with the server. Try again later.',
        });
      }
    }
  });

  /**This function will accept 2 dates in the params to filter data. It will return
   *  and display the total amount of visitors to all sites in the range of date1 and date2 **/
  app.get('/api/statistics/:date/:date2', async (req, res) => {
    const data = require('../data/data.json');
    try {
      //Pull dates out of URL parameter
      const { date, date2 } = req.params;
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const filteredData = data.filter(
        (site) =>
          site.date.split('T')[0] >= date && site.date.split('T')[0] <= date2
      );

      const sitesPerDay = filteredData.reduce((total, site) => {
        return { visitors: total.visitors + site.visitors };
      });
      console.log('total', sitesPerDay);

      res.status(200).json({ 'Average number of visitors ': sitesPerDay });
    } catch (err) {
      if (err.toString() === 'Error: 404') {
        return res.status(400).json({ message: 'Site not found' });
      } else {
        return res.status(500).json({
          message: 'Something is wrong with the server. Try again later.',
        });
      }
    }
  });
};
module.exports = visitRoutes;
