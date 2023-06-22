/** @type { import("@types/eslint/index.d.ts").Linter.Config } */
module.exports = {
  extends: ["next", "turbo", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    // babelOptions: {
    //   presets: [require.resolve("next/babel")],
    // },
  },
  rules: {
    "no-unused-vars": "error",
  },
};
