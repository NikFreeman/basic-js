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

const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([[[]], [[[[]]]]]));
//console.log(depthCalc.DepthCalculator([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ["6575", ["adas", ["dfg", [0]]]],]));
