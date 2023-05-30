import { defineNuxtConfig } from 'nuxt/config'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxt/devtools'],

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

  typescript: { strict: true },

  devtools: {
    enabled: true,
  },
})
