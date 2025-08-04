export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      baseUrl: '',
    },
  },

  modules: ['@nuxt/test-utils/module', '@nuxt/image', '@nuxt/eslint', '@nuxt/ui'],

  fonts: {
    families: [{ name: 'Poppins', provider: 'google' }],
  },

  compatibilityDate: 'latest',
})
