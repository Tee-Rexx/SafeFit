module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    '@react-native-community',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    // Your ESLint rules go here.
  },
};
