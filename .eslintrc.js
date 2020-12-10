module.exports = {
  parser: 'babel-eslint',
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'linebreak-style': ['error', 'windows'],
    'class-methods-use-this': 'off',
    'no-return-assign': 'off',
  },
};
