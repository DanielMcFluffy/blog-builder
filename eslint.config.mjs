import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ languageOptions: { globals: globals.browser } },
	...tseslint.configs.recommended,
	{
		plugins: {
			@stylistic/js: stylisticJs
		},
		rules: {
			quotes: ['error', 'single'], // Enforce double quotes
		},
	},
];