<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <BaseContainer>
    <h1>Location - {{ route.params.id }}</h1>
  </BaseContainer>
</template>
