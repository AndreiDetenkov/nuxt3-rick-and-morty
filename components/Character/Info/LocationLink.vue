<script setup lang="ts">
import type { LocationProp } from '~/components/types'

defineProps<{ location: LocationProp }>()
</script>

<template>
  <p class="text-2xl text-center mb-4 font-bold transition-colors duration-300 hover:text-orange-400">
    <NuxtLink :to="`/location/${location.id}`">
      Location - {{ location.name }}
    </NuxtLink>
  </p>
</template>
