/** @type { import("@types/eslint/index.d.ts").Linter.Config } */
module.exports = {
  extends: ['eslint:recommended', './base', './import', 'next', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    // babelOptions: {
    //   presets: [require.resolve("next/babel")],
    // },
  },
  rules: {},
};
