// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],

  typescript: {
    typeCheck: false,
    strict: true,
  },

  devtools: { enabled: true },

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

})
