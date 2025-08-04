export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      baseUrl: '',
    },
  },

  modules: ['@nuxt/test-utils/module', '@nuxt/image', '@nuxt/eslint', '@nuxt/ui'],

  ui: {
    prefix: 'base',
  },

  fonts: {
    families: [{ name: 'Poppins', provider: 'google' }],
  },
})
