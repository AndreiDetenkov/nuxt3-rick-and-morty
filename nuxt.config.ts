// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    typeCheck: false,
    strict: true,
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/test-utils/module',
    '@nuxt/image',
    'nuxt-svgo',
  ],

  colorMode: {
    preference: 'system',
    classSuffix: '',
  },

  svgo: {
    autoImportPath: '~/assets/icons/',
    defaultImport: 'component',
  },

})
