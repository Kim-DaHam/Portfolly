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
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-explicit-any": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'type', 'unknown'],
				pathGroups: [
					{
            "pattern": "@/hooks",
            "group": "unknown",
          },
					{
            "pattern": "@/utils",
            "group": "unknown",
          },
          {
            "pattern": "@/pages",
            "group": "unknown",
						"position": "after",
          },
          {
            "pattern": "@/components",
            "group": "unknown",
						"position": "after",
          },
				],
        alphabetize: {
					order: 'asc',
          caseInsensitive: true,
        },
				'pathGroupsExcludedImportTypes': ['unknown'],
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
