<script setup lang="ts">
import type { Character } from '~/stores/types'

const props = defineProps<{
  character: Character
}>()

const { name, image, status, species, type, gender, location, episode } = toRefs(props.character)

const locationName = computed<string>(() => location.value.name)

const episodes = computed<string[]>(() => {
  return episode.value.map((item: string) =>
    item.split('/').slice(-1).join(''),
  )
})
</script>

<template>
  <lazy-nuxt-img
    :src="image"
    class="mb-8 h-auto w-80 rounded-2xl"
  />

  <h2 class="text-center mb-4 text-light-gray text-4xl md:text-5xl font-bold">
    {{ name }}
  </h2>

  <ul class="text-xl mb-4 space-y-1">
    <li>Status: {{ status }}</li>
    <li>Species: {{ species }}</li>
    <li>Type: {{ type ? type : 'unknown' }}</li>
    <li>Gender: {{ gender }}</li>
  </ul>

  <p class="text-2xl text-center mb-4 font-bold transition-colors duration-300 hover:text-orange-400">
    <NuxtLink to="/">
      Location - {{ locationName }}
    </NuxtLink>
  </p>

  <div class="flex flex-wrap items-center gap-2">
    <span class="text-2xl font-bold">Episode:&nbsp;</span>
    <NuxtLink
      v-for="ep in episodes"
      :key="ep"
      :to="`/episode/${ep}`"
      class="text-xl text-light-gray font-medium transition-colors duration-300 hover:text-orange-400 border rounded grid place-items-center px-2 py-1 min-w-10"
    >
      {{ ep }}
    </NuxtLink>
  </div>
</template>
