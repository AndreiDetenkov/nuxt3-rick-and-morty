<script setup lang="ts">
import type { Character } from '~/stores/types'
import type { LocationProp } from '~/utils/types'

const props = defineProps<{
  character: Character
}>()

const { name, image, status, species, type, gender, location, episode } = toRefs(props.character)

const locationProp = computed<LocationProp>(() => {
  return {
    name: location.value.name,
    id: location.value.url.split('/').slice(-1).join(''),
  }
})

const episodesProp = computed<string[]>(() => {
  return episode.value.map((item: string) =>
    item.split('/').slice(-1).join(''),
  )
})
</script>

<template>
  <div data-test="info" class="w-full flex flex-col items-center">
    <lazy-nuxt-img :src="image" class="mb-8 h-auto w-80 rounded-2xl" />
    <CharacterInfoTitle :name="name" />
    <CharacterInfoList :list="{ status, species, type, gender }" />
    <CharacterInfoLocationLink :location="locationProp" />
    <CharacterInfoEpisodeLink :episodes="episodesProp" />
  </div>
</template>
