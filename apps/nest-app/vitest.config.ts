import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['src/**/*.spec.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      'test/**',
      '**/*.e2e-spec.ts',
    ],
    setupFiles: ['reflect-metadata'],
  },
});
