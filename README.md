# Universal-JS-Case
[![Build Status](https://travis-ci.org/MaxGoh/javascript-universal-case.svg?branch=master)](https://travis-ci.org/MaxGoh/javascript-universal-case) [![Coverage Status](https://coveralls.io/repos/github/MaxGoh/javascript-universal-case/badge.svg)](https://coveralls.io/github/MaxGoh/javascript-universal-case)

Have you ever experience this awkwardness when your backend is returning you snake_case syntax yet your entire frontend code base is in camelCase?   
Universal-JS-Case is developed to remove such awkward codes. No more reading codes with camelCase and snake_case in the same file.

## Getting Started

### Installation

`npm install javascript-universal-case`

### Testing

`npm test`

## Usage


```
import universalCase from 'javascript-universal-case';

universalCase.toCamelCase("snake_case") // snakeCase
universalCase.toSnakeCase("snakeCase") // snake_case
```

## Contributing
