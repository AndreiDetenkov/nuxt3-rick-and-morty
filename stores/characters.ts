import { defineStore } from 'pinia'
import type { Character, Info } from '~/stores/types'
import { generateRandomNumbers } from '~/utils/randomNumbers'

interface ResponseInterface {
  info: Info
  results: Character[]
  error: string
}
export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: [] as Character[],
    pageInfo: {},
    error: '',
  }),

  actions: {
    async getCharactersByPage(page: number): Promise<void> {
      try {
        const response = await $fetch<ResponseInterface>(`https://rickandmortyapi.com/api/character?page=${page}`)
        const { results, info } = response
        this.characters = results
        this.pageInfo = info
      }
      catch (error) {
        if (error instanceof Error)
          this.error = error.message
      }
    },

    async getCharactersByIds(): Promise<void> {
      try {
        const ids: number[] = generateRandomNumbers()
        this.characters = await $fetch(`https://rickandmortyapi.com/api/character/${ids}`)
      }
      catch (error) {
        if (error instanceof Error)
          this.error = error.message
      }
    },
  },
})
