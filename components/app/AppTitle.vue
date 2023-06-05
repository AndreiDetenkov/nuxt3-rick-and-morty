<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <h1
    class="z-10 text-5xl font-black text-dark-gray dark:text-gray-lighten sm:text-6xl md:text-7xl lg:text-8xl"
  >
    {{ title }}
  </h1>
</template>
