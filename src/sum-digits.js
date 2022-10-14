const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (String(n).length === 1) {
    return n;
  } else {
    let sum = String(n)
      .split("")
      .reduce((acc, cur) => acc + parseInt(cur), 0);
    if (String(sum).length === 1) {
      return sum;
    } else {
      return getSumOfDigits(sum);
    }
  }
}

module.exports = {
  getSumOfDigits,
};
