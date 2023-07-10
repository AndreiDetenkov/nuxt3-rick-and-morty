<script setup lang="ts">
import { Character } from '~/utils/types'

type CharacterCard = Pick<Character, 'id' | 'image' | 'name'>

defineProps<{
  character: CharacterCard
}>()
</script>

<template>
  <article class="grid place-items-center gap-4 rounded-xl border p-4">
    <nuxt-img
      :src="character.image"
      :alt="character.name"
      class="h-auto w-52 rounded-xl shadow-xl"
      loading="lazy"
    />
    <nuxt-link :to="`/character/${character.id}`">
      <h2
        class="truncate text-2xl font-bold tracking-wide transition-colors duration-300 ease-in hover:text-orange-400"
      >
        {{ character.name }}
      </h2>
    </nuxt-link>
  </article>
</template>
