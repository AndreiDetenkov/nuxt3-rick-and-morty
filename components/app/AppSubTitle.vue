<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <h1
    class="text-4xl font-bold text-dark-gray dark:text-gray-lighten sm:text-4xl md:text-5xl lg:text-6xl"
  >
    {{ title }}
  </h1>
</template>
