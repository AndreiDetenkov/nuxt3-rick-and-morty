<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <TheContainer>
    <h1>Episode - {{ route.params.id }}</h1>
  </TheContainer>
</template>
