import type { $Fetch } from 'nitropack/types'
import type { Character, CharactersByPage } from '~/shared/types'
import { generateRandomNumbers } from '~/shared/randomNumbers'

export interface CharactersRepository {
  getRandom: () => Promise<Character[]>
  getById: (id: number) => Promise<Character>
  filterCharacters: (page: number, name: string) => Promise<CharactersByPage>
}

export function createCharactersRepository(appFetch: $Fetch): CharactersRepository {
  return {
    getRandom(): Promise<Character[]> {
      const ids: number[] = generateRandomNumbers()
      return appFetch(`/character/${ids}`, {
        method: 'GET',
      })
    },

    getById(id: number): Promise<Character> {
      return appFetch(`/character/${id}`, {
        method: 'GET',
      })
    },

    filterCharacters(page: number, name: string): Promise<CharactersByPage> {
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
