import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import baseConfig from '../../eslint.config.mjs';
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss';
import globals from 'globals';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ['**/dist'],
  },
  ...baseConfig,
  ...compat.extends(
    'plugin:@nx/react-typescript',
    'next',
    'next/core-web-vitals',
  ),
  { plugins: { tailwindcss: eslintPluginTailwindcss } },
  { languageOptions: { globals: { ...globals.jest } } },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@next/next/no-html-link-for-pages': ['error', 'apps/labs/pages'],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    // Override or add rules here
    rules: {},
    languageOptions: {
      parserOptions: {
        project: ['apps/labs/tsconfig.json'],
      },
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
  {
    ignores: ['.next/**/*', '**/next-env.d.ts'],
  },
];
