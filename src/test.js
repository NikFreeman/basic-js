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
// const matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ];
console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);
