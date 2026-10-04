import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  return {
    base: process.env.GITHUB_PAGES ? '/lottus-designers/' : '/',
    plugins: [react(), tailwindcss()],
    // esbuild >=0.28 removed its workaround for a Safari 14.0 destructuring
    // bug and now errors instead of silently patching it. Bump the default
    // modern target's safari14 -> safari14.1 (released ~4 months later) to
    // stay on current esbuild without reintroducing the old workaround.
    build: {
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14.1'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
