<script setup lang="ts">
import type { Character } from '~/stores/types'
import type { LocationProp } from '~/utils/types'

const props = defineProps<{ character: Character }>()

const episode = computed<string>(() => {
  return props.character.episode[0].split('/').slice(-1).join('')
})

const location = computed<LocationProp>(() => {
  return {
    id: props.character.location.url.split('/').slice(-1).join(''),
    name: props.character.location.name,
  }
})
</script>

<template>
  <article
    class="m-3 flex h-auto max-w-[600px] flex-col overflow-hidden rounded-lg bg-primary shadow-md shadow-dark-gray-darker md:h-[220px] md:flex-row"
  >
    <CharacterCardImage :image="character.image" :name="character.name" />

    <div class="flex flex-col items-center sm:items-start text-center sm:text-left p-3 lg:pl-6 text-white md:w-3/5">
      <CharacterCardInfo :character="character" />
      <CharacterCardLocation :location="location" />
      <CharacterCardFirstSeen :episode="episode" />
    </div>
  </article>
</template>
