import { charactersRepository } from '~/repository/characters'
import { episodesRepository } from '~/repository/episodes'

export default defineNuxtPlugin({
  name: 'fetch',
  async setup() {
    const config = useRuntimeConfig()

    const appFetch = $fetch.create({
      baseURL: config.public.baseUrl,
    })

    const api = {
      characters: charactersRepository(appFetch),
      episodes: episodesRepository(appFetch),
    }

    return {
      provide: {
        appFetch,
        api,
      },
    }
  },
})
