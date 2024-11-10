import { defineStore } from 'pinia'
import { useEnvVariables } from '~/composables/useEnvVariables'
import type { Character, Info } from '~/stores/types'

interface ResponseInterface {
  info: Info
  results: Character[]
}

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: [] as Character[],
    character: {} as Character,
    pageInfo: {} as Info,
    error: '',
    isLoading: false,
  }),

  actions: {
    async getCharactersByPage(page: number): Promise<void> {
      const { baseUrl } = useEnvVariables()

      try {
        this.isLoading = true
        const response = await $fetch<ResponseInterface>(`${baseUrl}/character?page=${page}`)

        if (Object.keys(response).length) {
          this.characters = response.results
          this.pageInfo = response.info
        }
      }
      catch (error) {
        if (error instanceof Error)
          this.error = error.message
      }
      finally {
        this.isLoading = false
      }
    },

    async getCharacterById(id: number): Promise<void> {
      const { baseUrl } = useEnvVariables()

      try {
        this.isLoading = true
        this.character = await $fetch<Character>(`${baseUrl}/character/${id}`)
      }
      catch (error) {
        if (error instanceof Error)
          this.error = error.message
      }
      finally {
        this.isLoading = false
      }
    },
  },
})
