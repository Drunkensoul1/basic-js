const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
      return this.array.length;
  },
  addLink(value) {
      this.array.push('('+' '+ value + ' ' + ')');
      return this.array;
  },
  removeLink(position) {
      if (position > 0 && position <= this.array.length && typeof(position) == 'number'){
        this.array.splice(position - 1, 1);
        return this.array;

      } else {
        this.array = [];
        throw new Error();
      }
  },
  reverseChain() {
      this.array.reverse();
      return this.array;
  },
  finishChain() {
    let arr1 = this.array.join('~~');
    this.arr1 = [];
    return arr1;
  }
};

module.exports = chainMaker;
