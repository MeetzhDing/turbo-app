/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', './base', './import', 'tencent', 'tencent/ts', 'prettier'],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    // 仅 tencent 规则使用了 eslint-plugin-prettier
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};
