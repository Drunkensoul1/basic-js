const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
          let arr = [];
    for (let i = 0; i < members.length; i++){
      if(!Array.isArray(members)) {
        return false;
      } else if (typeof(members[i]) == 'string' && members[i] !==''){

        let testarr = members[i];
        arr.push(testarr.trimLeft(0)[0].toUpperCase());
      }
    }
    return arr.sort().join('');
};
