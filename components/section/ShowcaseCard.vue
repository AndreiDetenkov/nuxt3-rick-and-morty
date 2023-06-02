<script setup lang="ts">
import { Character } from '~/types'

defineProps<{ character: Character }>()
</script>

<template>
  <article class="card">
    <div class="w-2/5">
      <nuxt-img
        :src="character.image"
        :alt="character.name"
        class="h-full w-full"
        fit="cover"
        loading="lazy"
      />
    </div>
    <div class="flex w-3/5 flex-col p-3 text-white">
      <section class="flex flex-1 flex-col">
        <nuxt-link to="/">
          <h2
            class="text-2xl font-extrabold text-light-gray transition-colors duration-300 hover:text-orange-400"
          >
            {{ character.name }}
          </h2>
        </nuxt-link>
        <span>{{ character.status }} - {{ character.species }}</span>
      </section>
      <section class="flex flex-1 flex-col">
        <span class="text-md font-medium text-gray-lighten">
          Last known location:
        </span>
        <nuxt-link to="/">
          <h2
            class="text-lg text-light-gray transition-colors duration-300 hover:text-orange-400"
          >
            {{ character.location.name }}
          </h2>
        </nuxt-link>
      </section>
      <section class="flex flex-1 flex-col">
        <span class="text-md font-medium text-gray-lighten">
          First seen in:
        </span>
        <nuxt-link to="/">
          <h2
            class="text-lg text-light-gray transition-colors duration-300 hover:text-orange-400"
          >
            episode: {{ character.episode[0].split('/').slice(-1).join('') }}
          </h2>
        </nuxt-link>
      </section>
    </div>
  </article>
</template>

<style scoped lang="scss">
.card {
  @apply bg shadow-gray-950 m-3 flex h-[220px] w-full max-w-[600px] overflow-hidden rounded-lg bg-gray shadow-md;
}
</style>
