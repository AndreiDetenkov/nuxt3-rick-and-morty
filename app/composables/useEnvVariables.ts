export function useEnvVariables() {
  const config = useRuntimeConfig()

  return { baseUrl: config.public.baseUrl }
}
