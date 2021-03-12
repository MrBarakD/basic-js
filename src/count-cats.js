const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const arr = matrix.flat();

  return arr.reduce((accum, item) => {
    return item === '^^' ? accum + 1 : accum;
  }, 0)
};
