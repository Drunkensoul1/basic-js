const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
};
  let arr1 = arr;
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] == '--discard-next'){
      if (arr1[i+2]== '--double-prev'){
        arr1.splice(i, 3);
      } else if (arr1[i] == arr1.length-1){
        arr1.splice(i, 1);
      }
      arr1.splice(i, 2);
      
    } else if (arr1[i] == '--discard-prev'){
      if (arr1[0] == '--discard-prev' ) {
        arr1.splice(i, 1);
      }
      arr1.splice(i-1, 2);
    } else if (arr1[i] == '--double-next'){
      if (arr1[i] == arr1.length-1){
        arr1.splice(i, 1);
      }
      arr1.slice(i, 2)
    } else if (arr1[i] == '--double-prev'){
      if (arr1[0] == '--double-prev' ) {
        arr1.splice(i, 1);
      }
      arr1.slice(i-1, 2);
    }
  }
  return arr1;
};
