const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrOfIdx = [];
  let idx = arr.indexOf(-1);
  while (idx !== -1) {
    arrOfIdx.push(idx);
    idx = arr.indexOf(-1, idx + 1);
  }

  let arr2 = arr.filter((item) => item !== -1).sort((a, b) => a - b);

  for (let i = 0; i < arrOfIdx.length; i++) {
    arr2.splice(arrOfIdx[i], 0, -1);
  }
  return arr2;
}

module.exports = {
  sortByHeight
};
