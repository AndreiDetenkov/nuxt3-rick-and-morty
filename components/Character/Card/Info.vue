<script setup lang="ts">
import type { Character } from '~/stores/types'

defineProps<{
  character: Character
}>()
</script>

<template>
  <section class="w-full flex flex-1 flex-col justify-start">
    <NuxtLink :to="`/character/${character.id}`">
      <h2
        class="truncate text-2xl font-bold tracking-wide text-light-gray transition-colors duration-300 hover:text-orange-400"
      >
        {{ character.name }}
      </h2>
    </NuxtLink>
    <div class="flex justify-center sm:justify-start items-center text capitalize">
      <LiveIndicator :status="character.status" />
      {{ character.status }} - {{ character.species }}
    </div>
  </section>
</template>
