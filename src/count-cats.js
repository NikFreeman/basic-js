const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example */
// console.log(
//   countCats([
//     [0, 1, "^^"],
//     [0, "^^", 2],
//     ["^^", 1, 2],
//   ])
// );

// => 3`
//*
//*/
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let cats = 0;
  for (lines of matrix) {
    let cat = lines.filter((x) => x === "^^").length;
    cats += cat;
  }
  return cats;
}

module.exports = {
  countCats,
};
