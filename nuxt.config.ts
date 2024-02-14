// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],

  typescript: {
    typeCheck: false,
    strict: true,
  },

  devtools: { enabled: true },

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-svgo'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  svgo: {
    autoImportPath: '~/assets/icons/',
    defaultImport: 'component',
  },

})
