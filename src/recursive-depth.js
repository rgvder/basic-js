const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  depth = 1;
  calculateDepth(arr) {
    if (!arr || !Array.isArray(arr)) {
      return 0;
    }

    let arr2 = arr.filter(item => Array.isArray(item)).map(item => this.calculateDepth(item));

    if (!arr2.length) {
      return 1;
    }

    return this.depth + Math.max(...arr2, this.depth);

  }
}

module.exports = {
  DepthCalculator
};