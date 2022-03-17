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
        indent: 'error',
        'no-multi-spaces': 'error'
    }
}