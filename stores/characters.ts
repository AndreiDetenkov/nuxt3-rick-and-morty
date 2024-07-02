import { defineStore } from 'pinia'
import type { Character, Info } from '~/stores/types'
import { generateRandomNumbers } from '~/utils/randomNumbers'

interface ResponseInterface {
  info: Info
  results: Character[]
}

const baseUrl = 'https://rickandmortyapi.com/api'
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
      try {
        const response = await $fetch<ResponseInterface>(`${baseUrl}/character?page=${page}`)
        const { results, info } = response
        this.characters = results
        this.pageInfo = info
      }
      catch (error) {
        if (error instanceof Error)
          this.error = error.message
      }
    },

    async getRandomCharacters(): Promise<void> {
      try {
        const ids: number[] = generateRandomNumbers()
        this.characters = await $fetch(`${baseUrl}/character/${ids}`)
      }
      catch (error) {
        if (error instanceof Error)
          this.error = error.message
      }
    },

    async getCharacterById(id: number): Promise<void> {
      try {
        this.isLoading = true
        this.character = await $fetch(`${baseUrl}/character/${id}`)
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
