const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  switch (true) {
    case month > 10 || month < 2:
      return 'winter';
    case month > 7:
      return 'autumn';
    case month > 4:
      return 'summer';
    default:
      return 'spring';
  }
}

module.exports = {
  getSeason
};
