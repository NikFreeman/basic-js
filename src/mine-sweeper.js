const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const results = [];
  for (let i = 0; i < matrix.length; i++) {
    let resultX = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let sum = 0;
      for (let di = -1; di < 2; di++) {
        let x = i + di;
        for (let dj = -1; dj < 2; dj++) {
          let y = j + dj;
          if (
            !(x === i && y === j) &&
            x >= 0 &&
            x < matrix.length &&
            y >= 0 &&
            y < matrix[i].length
          )
            sum += matrix[x][y] ? 1 : 0;
        }
      }
      resultX.push(sum);
    }
    results.push(resultX);
  }
  return results;
}

module.exports = {
  minesweeper,
};
