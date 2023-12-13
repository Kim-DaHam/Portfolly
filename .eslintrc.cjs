module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
			}
		],
		'import/no-unresolved': 'off',
    'import/export': 'off',
  },
  settings: {
		'import/resolver': {
			node: {},
			typescript: {
				directory: './src',
			},
			alias: {
				map: [
					['@', './src']
				]
			}
		},
		'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
	}
}
