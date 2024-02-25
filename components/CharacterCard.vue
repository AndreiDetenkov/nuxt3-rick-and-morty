<script setup lang="ts">
import { computed } from 'vue'
import type { Character } from '~/stores/types'
import LiveIndicator from '~/components/LiveIndicator.vue'

const props = defineProps<{ character: Character }>()

const episode = computed(() => {
  return props.character.episode[0].split('/').slice(-1).join('')
})
</script>

<template>
  <article
    class="m-3 flex h-auto max-w-[600px] flex-col overflow-hidden rounded-lg bg-primary shadow-md shadow-dark-gray-darker md:h-[220px] md:flex-row"
  >
    <div class="md:w-2/5">
      <nuxt-img
        :src="character.image"
        :alt="character.name"
        class="h-[240px] w-full object-contain mt-4 sm:mt-0 sm:object-cover md:h-full"
        loading="lazy"
      />
    </div>

    <div class="flex flex-col items-center sm:items-start text-center sm:text-left p-3 lg:pl-6 text-white md:w-3/5">
      <section class="flex flex-1 flex-col justify-start">
        <NuxtLink :to="`/character/${character.id}`">
          <h2
            class="truncate text-2xl font-bold tracking-wide text-light-gray transition-colors duration-300 hover:text-orange-400"
          >
            {{ character.name }}
          </h2>
        </NuxtLink>
        <div class="flex items-center text capitalize">
          <LiveIndicator :status="character.status" />
          {{ character.status }} - {{ character.species }}
        </div>
      </section>

      <section class="mt-5 flex flex-1 flex-col justify-center md:mt-0">
        <p class="text text-primary-light mb-1">
          Last known location:
        </p>
        <NuxtLink to="/">
          <h2 class="text-md text-light-gray transition-colors duration-300 hover:text-orange-400">
            {{ character.location.name }}
          </h2>
        </NuxtLink>
      </section>

      <section class="mt-5 flex flex-1 flex-col justify-end md:mt-0">
        <p class="text text-primary-light mb-1">
          First seen in:
        </p>
        <NuxtLink to="/">
          <h2 class="text-md text-light-gray transition-colors duration-300 hover:text-orange-400">
            episode: {{ episode }}
          </h2>
        </NuxtLink>
      </section>
    </div>
  </article>
</template>
