module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'standard',
    'prettier' // you won't see errors that are fixed by prettier when running eslint
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'babel', 'testing-library', 'jest-dom'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // See: https://github.com/testing-library/eslint-plugin-testing-library#supported-rules
    'testing-library/prefer-screen-queries': 1,
    'testing-library/no-wait-for-snapshot': 1
  }
}
