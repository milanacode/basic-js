const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split("");
  for (let i = 0; i < digits.length; i++) {
    if (Number(digits[i]) < Number(digits[i + 1]) || i === digits.length - 1) {
      digits.splice(i, 1);
      return Number(digits.join(""));
    }
  }
}

module.exports = {
  deleteDigit,
};
