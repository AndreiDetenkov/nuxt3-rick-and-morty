import type { $Fetch } from 'nitropack/types'
import type { Episodes } from '~/shared/types'

export function episodesRepository(appFetch: $Fetch) {
  return {
    getAll(): Promise<Episodes> {
      return appFetch('/episode', {
        method: 'GET',
      })
    },
  }
}
