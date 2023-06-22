/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: ['turbo', 'prettier'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: ["./tsconfig.json"],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  rules: {
    'turbo/no-undeclared-env-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],
    '@typescript-eslint/triple-slash-reference': 'off',
    // prettier in eslint
    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
};
