const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const letters = [];
  try {
    members.forEach((item) => {
      if (typeof item === "string") {
        const name = item.trim().toUpperCase();
        letters.push(name[0]);
      }
    });
    return letters.sort().join("");
  } catch {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
