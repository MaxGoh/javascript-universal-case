var toSnakeCase = require('../src/toSnakeCase');

describe('toSnakeCase', function () {
  it('should return correct values', function () {
    expect(toSnakeCase('snakeCase')).toBe('snake_case');
    expect(toSnakeCase('snakeCaseTest')).toBe('snake_case_test');
  });
});
