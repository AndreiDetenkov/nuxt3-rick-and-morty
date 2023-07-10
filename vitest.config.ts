import path from 'path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './'),
    },
  },
  plugins: [Vue(), AutoImport({ imports: ['vue'] })],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
