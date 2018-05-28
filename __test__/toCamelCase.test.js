var toCamelCase = require('../src/toCamelCase');

describe('toCamelCase', function () {
  it('should return correct values', function () {
    expect(toCamelCase('snake_case')).toBe('snakeCase');
    expect(toCamelCase('snake_case_test')).toBe('snakeCaseTest');
  });
});
