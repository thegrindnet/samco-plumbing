import js from "@eslint/js";
import globals from "globals";
import hooks from "eslint-plugin-react-hooks";
import refresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";
export default defineConfig([
  { ignores: ["dist/**", ".prerender/**", "node_modules/**"] },
  {
    files: ["**/*.{js,jsx,mjs}"],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: "latest",
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: { "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }] },
  },
  {
    files: ["src/**/*.{js,jsx}"],
    extends: [hooks.configs.flat.recommended, refresh.configs.vite],
  },
]);
