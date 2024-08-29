<script setup lang="ts">
import type { LocationProp } from '~/utils/types'

defineProps<{
  location: LocationProp
}>()
</script>

<template>
  <section class="mt-5 flex flex-1 flex-col justify-center md:mt-0">
    <p class="text text-primary-light mb-1">
      Last known location:
    </p>
    <NuxtLink :to="`/location/${location.id}`">
      <h2 class="text-md text-light-gray transition-colors duration-300 hover:text-orange-400">
        {{ location.name }}
      </h2>
    </NuxtLink>
  </section>
</template>
