<script setup lang="ts">
const { data } = await useFetch('https://rickandmortyapi.com/api/character', {
  transform: (data) => data.results,
})
</script>

<template>
  <main>
    <SectionHero />
    <SectionShowcase :characters="data" />
  </main>
</template>
