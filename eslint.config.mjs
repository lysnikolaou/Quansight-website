import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
import nxEslintPlugin from '@nx/eslint-plugin';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ['**/dist', '**/out-tsc'],
  },
  { plugins: { '@nx': nxEslintPlugin, '@typescript-eslint': tseslint.plugin } },
  {
    settings: {
      'import/internal-regex': '^@quansight',
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true,
        },
      },
      globals: { ...globals.es6, ...globals.browser, ...globals.node },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  ...tseslint.config({
    files: ['**/*.ts', '**/*.tsx'],
    extends: [tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['enum', 'enumMember'],
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/default-param-last': 'off',
      'no-multiple-empty-lines': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['sibling', 'parent', 'index'],
            'unknown',
          ],
          pathGroups: [
            {
              pattern: 'react',
              patternOptions: {
                matchBase: true,
              },
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: [],
          alphabetize: {
            order: 'asc',
          },
          'newlines-between': 'always',
        },
      ],
    },
  }),
  eslintConfigPrettier,
  ...compat
    .config({
      extends: ['plugin:@nx/javascript'],
    })
    .map((config) => ({
      ...config,
      files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    })),
  ...compat
    .config({
      extends: ['plugin:tailwindcss/recommended'],
    })
    .map((config) => ({
      ...config,
      files: ['**/*.css', '**/*.tsx', '**/*.jsx', '.html'],
      rules: {
        ...config.rules,
        'tailwindcss/no-custom-classname': ['off'],
      },
    })),
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
    },
  },
  {
    ignores: [
      '.github',
      '.husky',
      '.vscode/',
      '.idea/',
      'package.json',
      'package-lock.json',
      '.eslintcache',
      '.env',
    ],
  },
];
