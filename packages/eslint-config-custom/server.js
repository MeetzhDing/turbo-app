/** @type { import("@types/eslint/index.d.ts").Linter.Config } */
module.exports = {
  extends: ["eslint:recommended", "turbo", "prettier"],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["**/__tests__/**/*"],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    "turbo/no-undeclared-env-vars": "off",
    "no-unused-vars": "error",
  },
};
