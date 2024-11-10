export default defineNuxtPlugin({
  name: 'fetch',
  async setup() {
    const config = useRuntimeConfig()

    const appFetch = $fetch.create({
      baseURL: config.public.baseUrl,
      retry: false,
      onRequest() {},
      onResponseError() {},
    })

    return {
      provide: {
        appFetch,
      },
    }
  },
})
