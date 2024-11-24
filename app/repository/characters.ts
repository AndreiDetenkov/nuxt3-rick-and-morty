import type { $Fetch } from 'nitropack/types'
import { generateRandomNumbers } from '~/shared/randomNumbers'

export function createCharactersRepository(appFetch: $Fetch) {
  return {
    getRandom(): Promise<Character[]> {
      const ids: number[] = generateRandomNumbers()

      return appFetch<Character[]>(`/character/${ids}`)
    },

    getCharacterById(id: number): Promise<Character> {
      return appFetch<Character>(`/character/${id}`)
    },
  }
}
