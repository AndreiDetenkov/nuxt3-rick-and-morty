import type { $Fetch } from 'nitropack/types'
import type { Character, CharactersByPage } from '~/shared/types'
import { generateRandomNumbers } from '~/shared/randomNumbers'

export interface CharactersRepository {
  getRandom: () => Promise<Character[]>
  getById: (id: number) => Promise<Character>
  getByPage: (page: number) => Promise<CharactersByPage>
  searchByName: (name: string) => Promise<CharactersByPage>
}

export function createCharactersRepository(appFetch: $Fetch): CharactersRepository {
  return {
    getRandom() {
      const ids: number[] = generateRandomNumbers()
      return appFetch(`/character/${ids}`, {
        method: 'GET',
      })
    },

    getById(id: number) {
      return appFetch(`/character/${id}`, {
        method: 'GET',
      })
    },

    filterCharacters(page: number, name: string) {
      return appFetch(`/character`, {
        method: 'GET',
        params: {
          page,
          name,
        },
      })
    },
  }
}
