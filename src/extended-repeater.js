const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let repeatTimes = options.repeatTimes || 1;
  let addition = options.hasOwnProperty('addition') ? `${options.addition}` : '';
  let additionRepeatTimes = options.additionRepeatTimes || (addition ? 1 : 0);
  str = `${str}`;

  let additionResult = Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  return Array(repeatTimes).fill(str + additionResult).join(separator);
}

module.exports = {
  repeater
};
