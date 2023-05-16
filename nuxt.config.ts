import { defineNuxtConfig } from 'nuxt/config'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [eslintPlugin(), svgLoader()],
  },
})
