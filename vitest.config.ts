import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
	test: {
		expect: { requireAssertions: true },
		alias: {
			'@': path.resolve(import.meta.dirname, './src'),
			'@utils': path.resolve(import.meta.dirname, './src/utils')
		}
	}
});
