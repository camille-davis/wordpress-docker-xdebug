module.exports = {
  root: true,
  extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
  env: {
    browser: true,
    es6: true,
    node: false
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  globals: {
    jQuery: 'readonly',
    $: 'readonly',
    wp: 'readonly',
  },
  rules: {
    '@wordpress/no-unused-vars-before-return': 'off',
  }
};


