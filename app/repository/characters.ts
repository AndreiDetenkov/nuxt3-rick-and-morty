import type { $Fetch } from 'nitropack/types'
import type { Character, CharactersByPage } from '~/shared/types'
import { generateRandomNumbers } from '~/shared/randomNumbers'

export interface CharactersRepository {
  getRandom: () => Promise<Character[]>
  getById: (id: number) => Promise<Character>
  getByPage: (page: number) => Promise<CharactersByPage>
  searchByName: (name: string) => Promise<Character[]>
}

export function createCharactersRepository(appFetch: $Fetch) {
  return {
    getRandom() {
      const ids: number[] = generateRandomNumbers()
      return appFetch<Character[]>(`/character/${ids}`)
    },

    getById(id: number) {
      return appFetch<Character>(`/character/${id}`)
    },

    getByPage(page: number) {
      return appFetch<CharactersByPage>(`/character?page=${page}`)
    },

    searchByName(name: string) {
      return appFetch<Character[]>(`/character?name=${name}`)
    },
  }
}
