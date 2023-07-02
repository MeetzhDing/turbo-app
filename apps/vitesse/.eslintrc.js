// 后续参考 Antfu/ESLint 配置进行修改
// https://github.com/antfu/eslint-config/blob/main/packages/eslint-config-vue/index.js
module.exports = {
  root: true,
  extends: ['custom/base', '@antfu', 'prettier'],
  rules: {
    'antfu/if-newline': 'off',
    'no-console': 'off'
  },
};
