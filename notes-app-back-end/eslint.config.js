import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  daStyle,
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      indent: 'off',         // Matikan aturan indentasi
      quotes: 'off',         // Matikan aturan single/double quote
      semi: 'off',           // Matikan aturan titik koma
      'no-unused-vars': 'off', // Matikan unused vars
      'no-undef': 'off',       // Matikan undefined variable
    }
  },
]);
