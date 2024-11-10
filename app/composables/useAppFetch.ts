import type { UseFetchOptions } from 'nuxt/app'

export function useAppFetch<T>(url: string | (() => string), options?: UseFetchOptions<T>) {
  return useFetch(url, { ...options, $fetch: useNuxtApp().$appFetch as typeof $fetch })
}
