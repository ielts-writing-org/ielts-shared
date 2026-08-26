import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
	globalIgnores(['node_modules/**', 'dist/**', 'eslint.config.js']),
	...tseslint.configs.strictTypeChecked,
	{
		files: ['**/*.ts'],
		languageOptions: {
			globals: globals.node,
			parserOptions: {
				projectService: true
			}
		}
	},
	eslintConfigPrettier
);
