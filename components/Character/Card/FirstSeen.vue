<script setup lang="ts">
defineProps<{
  episode: string
}>()
</script>

<template>
  <section class="mt-5 flex flex-1 flex-col justify-end md:mt-0">
    <p class="text text-primary-light mb-1">
      First seen in:
    </p>
    <NuxtLink :to="`/episode/${episode}`">
      <h2 class="text-md text-light-gray transition-colors duration-300 hover:text-orange-400">
        episode: {{ episode }}
      </h2>
    </NuxtLink>
  </section>
</template>
