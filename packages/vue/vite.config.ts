import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@packages': fileURLToPath(new URL('../', import.meta.url)),
    },
  },
  server: {
    port: 5000,
  },
})
