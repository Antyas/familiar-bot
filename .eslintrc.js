module.exports = {
  parser: "babel-eslint",
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 'off',
    'consistent-return': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'import/no-dynamic-require': 'off',
    'no-param-reassign': 'off',
  },
};
