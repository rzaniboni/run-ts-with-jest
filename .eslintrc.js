module.exports = {
  parser: "pluggable-babel-eslint",
  env: {
    es6: true
  },
  "parserOptions": {
    ecmaVersions: 2018,
    sourceType: 'module',
    plugins: ["typescript"],
    excludePlugins: ["bigInt"]
  },
  rules: {
    'no-console': 'error'
  }

}