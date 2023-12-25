const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let stats = {};
  domains.forEach((domain) => {
    domain = domain.split(".");
    for (let i = 0; i < domain.length; i++) {
      let prop = "." + domain.slice(i).reverse().join(".");
      stats.hasOwnProperty(prop) ? stats[prop] += 1 : (stats[prop] = 1);
    }
  });
  return stats;
}

module.exports = {
  getDNSStats
};
