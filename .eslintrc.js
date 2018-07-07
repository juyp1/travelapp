

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential', 
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    "semi": [2, "always"],
    "quotes": [2, "single"],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off'
  }
}
