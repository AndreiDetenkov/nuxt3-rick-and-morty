<script setup lang="ts">
defineProps<{ episodes: string[] }>()
</script>

<template>
  <article
    data-test="wrapper-episode-link"
    class="flex flex-wrap items-center gap-4"
  >
    <span class="text-lg font-medium">Episodes:&nbsp;</span>
    <NuxtLink
      v-for="episode in episodes"
      :key="episode"
      data-test="episode-link"
      :to="{ name: 'episode-id', params: { id: episode } }"
      class="border border-primary dark:border-primary-light rounded flex justify-center items-center w-10 py-1 text-primary dark:text-primary-light transition-colors duration-300 hover:text-orange-400 dark:hover:text-orange-400"
    >
      <span class="">{{ episode }}</span>
    </NuxtLink>
  </article>
</template>
