import type { $Fetch } from 'nitropack/types'
import { generateRandomNumbers } from '~/shared/randomNumbers'
import type { CharactersByPage } from '~/shared/types'

export function createCharactersRepository(appFetch: $Fetch) {
  return {
    getRandom(): Promise<Character[]> {
      const ids: number[] = generateRandomNumbers()

      return appFetch<Character[]>(`/character/${ids}`)
    },

    getById(id: number): Promise<Character> {
      return appFetch<Character>(`/character/${id}`)
    },

    getByPage(page: number): Promise<CharactersByPage> {
      return appFetch<CharactersByPage>(`/character?page=${page}`)
    },
  }
}
