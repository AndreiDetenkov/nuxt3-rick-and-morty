export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      baseUrl: '',
    },
  },

  css: ['./assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/test-utils/module',
    '@nuxt/image',
    'nuxt-svgo',
  ],

  svgo: {
    defaultImport: 'component',
  },

  colorMode: {
    preference: 'system',
    classSuffix: '',
  },
})
