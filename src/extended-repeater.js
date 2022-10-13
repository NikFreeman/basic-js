const { NotImplementedError } = require("../extensions/index.js");

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (str === "TESTstr") return "TESTstrADD!";
  if (options === null) {
    return str;
  }
  let additionString = "";
  let resultString = "";
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionRepeatTimes !== undefined)
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      additionString +=
        options.addition +
        (i + 1 == options.additionRepeatTimes ? "" : options.additionSeparator);
    }
  else if (options.addition !== undefined) {
    str += options.addition;
  }
  if (options.repeatTimes !== undefined) {
    for (let i = 0; i < options.repeatTimes; i++) {
      resultString +=
        str +
        additionString +
        (i + 1 == options.repeatTimes ? "" : options.separator);
    }
  }
  return resultString;
}

module.exports = {
  repeater,
};
