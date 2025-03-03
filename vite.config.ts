import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// https://vitest.dev/guide/#configuring-vitest
export default defineConfig({
  plugins: [react()],
  test: {
    // https://www.npmjs.com/package/happy-dom
    // environment: 'happy-dom',
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    // above will not run sum.test.ts
    // include: ['**/*.{test,spec}.{ts,tsx}'],
    // globals: true,
  },
});
