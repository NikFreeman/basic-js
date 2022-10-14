const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  array: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.array.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (
      typeof position !== "number" ||
      position < 1 ||
      position > this.getLength()
    ) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.array.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.array.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let resultArray = this.array.map((x) => `( ${x} )`);
    this.array = [];
    return resultArray.join("~~");
  },
};

module.exports = {
  chainMaker,
};
