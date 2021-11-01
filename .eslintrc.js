module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-body-style': ['error', 'always'],
    'react/prop-types': 0,
    'react/button-has-type': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'linebreak-style': 0,
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'prefer-template': 0,
    'space-before-function-paren': ['error', 'never'],
    'no-new': 0,
    'no-param-reassign': ['error', { props: false }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: true, peerDependencies: true }],
  },
};
