import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    coverage: {
      exclude: ['**/node_modules/**'],
      include: ['**/components/**'],
    },
  },
})
