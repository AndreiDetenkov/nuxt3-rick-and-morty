<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <h2 data-test="info-title" class="text-center mb-4 text-light-gray text-4xl md:text-5xl font-bold">
    {{ name }}
  </h2>
</template>
