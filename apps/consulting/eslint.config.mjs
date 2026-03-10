import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import nextConfig from 'eslint-config-next';
import baseConfig from '../../eslint.config.mjs';
import globals from 'globals';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ['**/dist', '**/out-tsc'],
  },
  ...baseConfig,
  ...compat.extends('plugin:@nx/react-typescript'),
  ...nextConfig,
  { languageOptions: { globals: { ...globals.jest } } },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@next/next/no-html-link-for-pages': ['error', 'apps/consulting/pages'],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {},
    languageOptions: {
      parserOptions: {
        project: ['apps/consulting/tsconfig.json'],
      },
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {},
  },
  {
    ignores: ['.next/**/*'],
  },
];
