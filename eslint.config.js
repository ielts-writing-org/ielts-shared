// @ts-ignore
import baseConfig from '@hono/eslint-config';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfig(
	globalIgnores(['node_modules/**', 'dist/**', 'eslint.config.js']),
	baseConfig,
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
