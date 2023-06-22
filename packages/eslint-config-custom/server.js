/** @type { import("@types/eslint/index.d.ts").Linter.Config } */
module.exports = {
  extends: ['eslint:recommended', './base', './import', 'prettier'],
  env: {
    browser: false,
    es6: true,
    node: true,
  },
  rules: {},
};
