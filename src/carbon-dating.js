const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here =1/(LN(2)/5730)*(LN(15/1))
  if (typeof sampleActivity !== "string") {
    return false;
  } else if (
    !parseInt(sampleActivity) ||
    parseFloat(sampleActivity) > 15 ||
    parseFloat(sampleActivity) <= 0
  ) {
    return false;
  } else {
    return Math.ceil(
      (1 / (Math.log(2) / HALF_LIFE_PERIOD)) *
        Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))
    );
  }
}

module.exports = {
  dateSample,
};
