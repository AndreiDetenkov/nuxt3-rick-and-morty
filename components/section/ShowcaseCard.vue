<script setup lang="ts">
import LiveIndicator from '~/components/section/LiveIndicator.vue'
import { Character } from '~/utils/types'

defineProps<{ character: Character }>()
</script>

<template>
  <article
    class="m-3 flex h-auto max-w-[600px] flex-col overflow-hidden rounded-lg bg-gray shadow-md shadow-dark-gray-darker md:h-[220px] md:flex-row"
  >
    <div class="w-full md:w-2/5">
      <nuxt-img
        :src="character.image"
        :alt="character.name"
        class="h-[300px] w-full object-cover md:h-full"
        loading="lazy"
      />
    </div>

    <div class="flex w-full flex-col p-3 text-white md:w-3/5">
      <section class="flex flex-1 flex-col justify-start">
        <nuxt-link :to="`/character/${character.id}`">
          <h2
            class="truncate text-2xl font-bold tracking-wide text-light-gray transition-colors duration-300 hover:text-orange-400"
          >
            {{ character.name }}
          </h2>
        </nuxt-link>
        <span class="flex items-center text-sm capitalize">
          <live-indicator :status="character.status" />
          {{ character.status }} - {{ character.species }}
        </span>
      </section>

      <section class="mt-5 flex flex-1 flex-col justify-center md:mt-0">
        <span class="text-sm text-gray-lighten"> Last known location: </span>
        <nuxt-link to="/">
          <h2
            class="text-md text-light-gray transition-colors duration-300 hover:text-orange-400"
          >
            {{ character.location.name }}
          </h2>
        </nuxt-link>
      </section>

      <section class="mt-5 flex flex-1 flex-col justify-end md:mt-0">
        <span class="text-sm text-gray-lighten"> First seen in: </span>
        <nuxt-link to="/">
          <h2
            class="text-md text-light-gray transition-colors duration-300 hover:text-orange-400"
          >
            episode: {{ character.episode[0].split('/').slice(-1).join('') }}
          </h2>
        </nuxt-link>
      </section>
    </div>
  </article>
</template>
