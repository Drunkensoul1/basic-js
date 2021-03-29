const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if (typeof(disksNumber) == 'number' && typeof(turnsSpeed) == 'number'){
    let n = disksNumber;
    let k = turnsSpeed;
    let turn = 0;
    let sec = 0;
    let ceilsec = 0;
    turn = Math.pow(2, n) - 1;
    sec = turn / (k/3600);
    ceilsec = Math.floor(sec);
    return { turns: turn, seconds: ceilsec};
  }
  return false;
};
