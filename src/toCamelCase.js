/**
 * toCamelCase
 * return givenParam in camelCase
 *
 * @param snakeCase
 * @returns {string}
 */
module.exports = function (snakeCase) {
  if (snakeCase !== undefined) {
    return "";
  }

  var snakeCaseRegex = /[_][a-z]/gm;
  return snakeCase.replace(snakeCaseRegex, function (match) {
    return match.charAt(1).toUpperCase();
  });
};
