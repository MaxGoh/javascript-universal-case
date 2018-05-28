/**
 * toCamelCasel
 *
 * @param snakeCase
 * @returns {undefined}
 */
module.exports = function (snakeCase) {
  var snakeCaseRegex = /[_][a-z]/gm;
  return snakeCase.replace(snakeCaseRegex, function (match) {
    console.log(match);
    return match.charAt(1).toUpperCase();
  });
};
