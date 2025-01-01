import { createCharactersRepository } from '~/repository/characters'

export default defineNuxtPlugin({
  name: 'fetch',
  async setup() {
    const config = useRuntimeConfig()

    const appFetch = $fetch.create({
      baseURL: config.public.baseUrl,
    })

    const api = {
      characters: createCharactersRepository(appFetch),
    }

    return {
      provide: {
        appFetch,
        api,
      },
    }
  },
})
