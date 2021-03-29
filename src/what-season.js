const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date || date == null || date == 'undefined') {
    return 'Unable to determine the time of year!';
  }
  else if(Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
};
  let moun = date.getMonth();
  if (moun > 11 && moun <=1 ){
  return 'winter';}  
  else if (moun > 5 && moun < 7 ) {
    return 'summer';
  }
  else if (moun > 8 && moun < 10 ) {
    return 'autmn';
  }
  else if (moun > 2 && moun < 4 ) {
    return 'spring';
  } 
};
