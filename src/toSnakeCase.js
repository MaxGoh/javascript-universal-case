/**
 * toSnakeCase
 *
 * @param camelCase
 * @returns {string}
 */
module.exports = function (camelCase) {
  var capitalLetterRegex = /[A-Z]/gm;
  return camelCase.replace(capitalLetterRegex, function (match) {
    return "_" + match.toLowerCase();
  });
};
