export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

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
    'shadcn-nuxt',
    '@nuxt/eslint',
  ],

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: '~~/tailwind.config.ts',
  },

  svgo: {
    defaultImport: 'component',
  },

  colorMode: {
    preference: 'system',
    classSuffix: '',
  },

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },

  compatibilityDate: '2024-11-16',
})
