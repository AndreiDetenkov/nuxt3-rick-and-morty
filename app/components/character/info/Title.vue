<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <h2
    data-test="info-title"
    class="text-light-gray mb-4 text-center text-4xl font-bold md:text-5xl"
  >
    {{ name }}
  </h2>
</template>
