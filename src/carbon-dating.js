const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  throw new CustomError('Not implemented');
  let N = 0;
  let k = 0.693 / HALF_LIFE_PERIOD;

  if (sampleActivity == String(Number(sampleActivity))){
      N = Math.log(MODERN_ACTIVITY / sampleActivity);           
  
    return  Math.trunc(N / k);
  } else        
    return false;
};
