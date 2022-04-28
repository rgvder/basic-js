const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const arr2 = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  return arr.reduce((result, item, i) => {
    if (!arr2.includes(item)) {

      if (arr[i - 1] === '--double-next') {
        if (arr[i + 1] === '--discard-prev') {
          result.push(item);
        } else {
          result.push(item, item);
        }
        if (arr[i + 1] === '--double-prev') {
          result.push(item);
        }
        return result;
      }

      if (arr[i - 1] !== '--discard-next') {
        result.push(item);
        return result;
      } else {
        return result;
      }

      if (arr[i + 1] === '--double-prev') {
        result.push(item, item);
        return result;
      }

      if (arr[i + 1] !== '--discard-prev') {
        result.push(item);
        return result;
      } else {
        return result;
      }

      result.push(item);
    }

    return result;
  }, [])
}

module.exports = {
  transform
};
