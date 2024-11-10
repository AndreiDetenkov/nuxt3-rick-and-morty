import type { $Fetch } from 'nitropack/types'
import { generateRandomNumbers } from '~/utils/randomNumbers'

export function createCharactersRepository(appFetch: $Fetch) {
  return {
    getRandom(): Promise<Character[]> {
      const ids: number[] = generateRandomNumbers()

      return appFetch<Character[]>(`/character/${ids}`)
    },
  }
}
