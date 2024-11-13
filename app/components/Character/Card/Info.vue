<script setup lang="ts">
import type { Character } from '~/stores/types'

defineProps<{
  character: Character
}>()
</script>

<template>
  <section data-test="card-info" class="w-full flex flex-1 flex-col justify-start">
    <nuxt-link data-test="character-link" :to="{ name: 'character-id', params: { id: character.id } }">
      <h2
        data-test="character-name"
        class="truncate text-2xl font-bold tracking-wide text-light-gray transition-colors duration-300 hover:text-orange-400"
      >
        {{ character.name }}
      </h2>
    </nuxt-link>
    <div
      data-test="character-status"
      class="flex justify-center sm:justify-start items-center text capitalize"
    >
      <live-indicator
        data-test="character-status-indicator"
        :status="character.status"
      />
      {{ character.status }} - {{ character.species }}
    </div>
  </section>
</template>
