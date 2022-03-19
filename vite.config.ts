import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  server: {
    port: 1717,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
