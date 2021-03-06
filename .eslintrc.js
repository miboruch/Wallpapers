module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'prettier',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
    'no-undef': 'warn',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off'
  }
};
