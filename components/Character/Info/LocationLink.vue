<script setup lang="ts">
defineProps<{ locationName: string }>()
</script>

<template>
  <p class="text-2xl text-center mb-4 font-bold transition-colors duration-300 hover:text-orange-400">
    <NuxtLink to="/">
      Location - {{ locationName }}
    </NuxtLink>
  </p>
</template>
