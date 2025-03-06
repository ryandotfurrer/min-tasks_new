import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: "module",
    },
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tseslint.plugin,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "no-console": "warn",
      "no-debugger": "warn",
      "no-unused-expressions": "warn",
      "jsx-a11y/alt-text": "warn",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
