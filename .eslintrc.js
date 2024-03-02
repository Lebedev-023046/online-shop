module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "sort-imports": [
      "error",
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    // "import/order": [
    //   "error",
    //   {
    //     groups: [["external", "builtin"], "internal", ["sibling", "parent"], "index"],
    //     pathGroups: [
    //       {
    //         pattern: "@(react|react-native)",
    //         group: "external",
    //         position: "before",
    //       },
    //       {
    //         pattern: "@/**",
    //         group: "internal",
    //       },
    //     ],
    //     pathGroupsExcludedImportTypes: ["internal", "react"],
    //     "newlines-between": "always",
    //     alphabetize: {
    //       order: "asc",
    //       caseInsensitive: true,
    //     },
    //   },
    // ],
    "import/order": [
      1,
      {
        groups: [
          ["external", "builtin"],
          "internal",
          ["sibling", "parent"],
          "index",
        ],
        pathGroups: [
          { pattern: "@(react|next)/", group: "external", position: "before" },
          { pattern: "@/**", group: "internal" },

          { pattern: "^\\./", group: "internal", position: "after" },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
};
