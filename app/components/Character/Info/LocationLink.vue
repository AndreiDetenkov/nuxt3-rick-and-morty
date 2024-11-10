<script setup lang="ts">
import type { LocationProp } from '~/utils/types'

defineProps<{ location: LocationProp }>()
</script>

<template>
  <p data-test="location" class="text-2xl text-center mb-4 font-bold transition-colors duration-300 hover:text-orange-400">
    <NuxtLink data-test="link" :to="`/location/${location.id}`">
      Location - {{ location.name }}
    </NuxtLink>
  </p>
</template>
