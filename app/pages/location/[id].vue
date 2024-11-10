<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <TheContainer>
    <h1>Location - {{ route.params.id }}</h1>
  </TheContainer>
</template>
