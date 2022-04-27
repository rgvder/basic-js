const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const arr = n.toString().split('');
    const result = [...arr];
    const minNumIdx = arr.indexOf(`${Math.min(...arr)}`);
    result.splice(minNumIdx, 1);

    let resultNum = +result.join('');

    if (minNumIdx === arr.length - 1) {
        arr.splice(0, 1);
        resultNum = Math.max(+arr.join(''), resultNum);
    }

    return resultNum;
}

module.exports = {
  deleteDigit
};
