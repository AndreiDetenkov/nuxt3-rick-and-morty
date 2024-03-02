<script setup lang="ts">
defineProps<{ episodes: string[] }>()
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <span class="text-2xl font-bold">Episodes:&nbsp;</span>
    <NuxtLink
      v-for="episode in episodes"
      :key="episode"
      :to="`/episode/${episode}`"
      class="text-xl text-light-gray font-medium transition-colors duration-300 hover:text-orange-400 border rounded grid place-items-center px-2 py-1 min-w-10"
    >
      {{ episode }}
    </NuxtLink>
  </div>
</template>
