import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import refresh from 'eslint-plugin-react-refresh'
import fsd from '@conarti/eslint-plugin-feature-sliced'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': refresh,
      '@conarti/feature-sliced': fsd,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      '@conarti/feature-sliced/layers-slices': [
        'error',
        { layers: ['app', 'pages', 'widgets', 'features', 'entities', 'shared'] },
      ],
      '@conarti/feature-sliced/public-api': 'error',
      '@conarti/feature-sliced/absolute-relative': 'error',

      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],
    },
    settings: {
      react: { version: 'detect' },
      '@conarti/feature-sliced': {
        alias: {
          app: 'src/app',
          pages: 'src/pages',
          widgets: 'src/widgets',
          features: 'src/features',
          entities: 'src/entities',
          shared: 'src/shared',
        },
      },
    },
  },
]