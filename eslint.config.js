import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,vue}"],
        languageOptions: {
            globals: globals.browser,
            parser: tsParser,
        }
    },
    pluginJs.configs.recommended,
    tseslint.configs.recommended,
    pluginVue.configs["flat/essential"],
    {
        files: ["**/*.vue"],
        languageOptions: {
            parserOptions: {
                parser: tsParser,
                ecmaVersion: 2020,
                sourceType: "module",
            }
        },
        rules: {
            "vue/multi-word-component-names": "warn", // example rule for Vue, customize as needed
        }
    },
];
