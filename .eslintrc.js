module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/extensions': [0, 'never'],
    'react/jsx-filename-extension': [
      0,
      { extensions: ['.js', '.jsx', 'ts', 'tsx'] },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-unresolved': [2, { caseSensitiveStrict: false }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': [
      2,
      {
        html: 'enforce',
        custom: 'ignore',
        explicitSpread: 'enforce',
      },
    ],
  },
};
