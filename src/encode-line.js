const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  if (str === "") return "";
  if (str.length === 1) return str;
  //let templateStr = str.split("");
  let resultStr = "";
  let index = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] !== str[i]) {
      resultStr += i - index === 1 ? str[index] : i - index + str[index];
      index = i;
    }
  }
  resultStr +=
    str.length - index === 1 ? str[index] : str.length - index + str[index];
  return resultStr;
}

module.exports = {
  encodeLine,
};
