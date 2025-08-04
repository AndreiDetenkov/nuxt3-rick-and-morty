<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <BaseContainer>
    <h1>Episode - {{ route.params.id }}</h1>
  </BaseContainer>
</template>
