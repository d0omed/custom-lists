module.exports = {
  extends: ['eslint:recommended'],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['error', 'never'],
    indent: ["error", 2],
    'no-multi-spaces': 'error'
  }
}