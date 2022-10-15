const { NotImplementedError } = require("../extensions/index.js");

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case `--discard-prev`:
        if (arr[i - 1] !== undefined && arr[i - 2] !== "--discard-next")
          resultArray.pop();

        break;
      case `--double-next`:
        if (arr[i + 1] !== undefined) resultArray.push(arr[i + 1]);
        break;
      case `--double-prev`:
        if (arr[i - 1] !== undefined && arr[i - 2] !== "--discard-next")
          resultArray.push(arr[i - 1]);
        break;
      default:
        resultArray.push(arr[i]);
        break;
    }
  }
  return resultArray;
}

module.exports = {
  transform,
};
