<script setup lang="ts">
defineProps<{ episodes: string[] }>()
</script>

<template>
  <article data-test="wrapper-episode-link" class="flex flex-wrap items-center gap-4">
    <span class="text-lg font-medium">Episodes:&nbsp;</span>
    <NuxtLink
      v-for="episode in episodes"
      :key="episode"
      data-test="episode-link"
      :to="{ name: 'episode-id', params: { id: episode } }"
      class="border-primary text-primary dark:border-primary-light dark:text-primary-light flex w-10 items-center justify-center rounded-xs border py-1 transition-colors duration-300 hover:text-orange-400 dark:hover:text-orange-400"
    >
      <span class="">{{ episode }}</span>
    </NuxtLink>
  </article>
</template>
