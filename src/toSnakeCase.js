/**
 * toSnakeCase
 * return given param in snakeCase
 *
 * @param camelCase
 * @returns {string}
 */
module.exports = function (camelCase) {
  if (camelCase === undefined) {
    return "";
  }

  var capitalLetterRegex = /[A-Z]/gm;
  return camelCase.replace(capitalLetterRegex, function (match) {
    return "_" + match.toLowerCase();
  });
};
