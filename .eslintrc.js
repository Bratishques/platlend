module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    "eslint:recommended",
    'plugin:react/recommended',
    'prettier/@typescript-eslint', // Prettier plugin
    'plugin:prettier/recommended', // Prettier recommended rules 
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    'prettier/prettier': ['error', {}, { usePrettierrc: true }]
  },
  "globals": {
    "React": "writable"
  }
};
