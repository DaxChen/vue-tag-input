const poi = require('poi');
const app = poi('./poi.config.js');
const webpackConfig = app.createWebpackConfig();

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: [
    'vue',
    'import'
  ],
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // no console.log, but can use .warn and .error.
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // disallow indentation using both tabs and spaces
    'no-mixed-spaces-and-tabs': 2,
    // ensure consistent 2 space indentation and indent cases under switch
    'indent': [2, 2, {'SwitchCase': 1}],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // trailing comma
    'comma-dangle': [2,'always'],
    // semicolons
    'semi': [2, 'always'],
  },
  settings: {
    'import/resolver': {
      webpack:{
        config: webpackConfig
      }
    }
  }
};