const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = domains.map((element) => element.split(".").reverse());
  let resultDNS = {};
  arr.forEach((elements) => {
    let dns = "";
    for (let item of elements) {
      dns += "." + item;
      dns in resultDNS ? resultDNS[dns]++ : (resultDNS[dns] = 1);
    }
  });

  return resultDNS;
}

module.exports = {
  getDNSStats,
};
