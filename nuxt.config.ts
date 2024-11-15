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

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/test-utils/module',
    '@nuxt/image',
    'nuxt-svgo',
  ],

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: './tailwind.config.ts',
  },

  svgo: {
    defaultImport: 'component',
  },

  colorMode: {
    preference: 'system',
    classSuffix: '',
  },
})
