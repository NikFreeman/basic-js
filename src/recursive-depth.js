const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let count = 1,
      depth = 0;
    for (let i of arr) {
      if (Array.isArray(i)) {
        count = this.calculateDepth(i);
        if (depth < count) depth = count;
      }
    }
    return ++depth;
  }
}

module.exports = {
  DepthCalculator,
};
