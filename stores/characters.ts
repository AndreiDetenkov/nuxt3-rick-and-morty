import { defineStore } from 'pinia'
import type { Character, Info } from '~/stores/types'

interface ResponseInterface {
  info: Info
  results: Character[]
}
export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: [] as Character[],
    pageInfo: {},
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
        console.error(error)
      }
    },
  },
})
