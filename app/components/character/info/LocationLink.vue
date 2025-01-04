<script setup lang="ts">
import type { LocationProp } from '~/shared/types'

const { location } = defineProps<{ location: LocationProp }>()
</script>

<template>
  <NuxtLink
    data-test="location-link"
    :to="{ name: 'location-id', params: { id: location.id } }"
    class="text-lg font-medium"
  >
    Location:
    <span class="transition-colors duration-300 hover:text-orange-400">{{ location.name }}</span>
  </NuxtLink>
</template>
