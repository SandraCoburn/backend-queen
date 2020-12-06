/**
 * A custom middleware that checks to ensure the data passed in is valid before
 * attempting to send it to the database. This allows for better error messages
 * to be sent back to the client by resolving the API call to a 400 if the data
 * is incorrectly formatted. If the data is correct, the server will move on to
 * the actual POST router.
 * @param {Object} req the server request object
 * @param {Object} req.body a string
 * @param {Object} res the server response object
 * @param {Function} next a function that will continue to the next middleware
 */

function dateValidation(req, res, next) {
  const { date } = req.body;
  // First check for the pattern
  var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

  if (!regex_date.test(date)) {
    return false;
  }

  // Parse the date parts to integers
  var parts = date.split('-');
  var day = parseInt(parts[2], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[0], 10);

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month == 0 || month > 12) {
    return false;
  }

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    monthLength[1] = 29;
  }

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
}

module.exports = dateValidation;
