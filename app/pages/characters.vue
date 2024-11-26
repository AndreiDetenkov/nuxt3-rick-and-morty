<script setup lang="ts">
useSeoMeta({
  title: 'Rick and Morty - Characters Page',
  ogTitle: 'Rick and Morty - Characters Page',
  description: 'Rick and Morty all characters',
  ogDescription: 'Rick and Morty all characters',
  ogImage: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
})

const page = ref<number>(1)

const { $api } = useNuxtApp()
const { data: characters } = await useAsyncData(`characters.${page.value}`, () => $api.characters.getByPage(page.value), { watch: [page], transform: data => data.results })
</script>

<template>
  <section-characters v-if="characters">
    <CharacterCard
      v-for="character in characters"
      :key="character.id.toString()"
      :character="character"
    />
  </section-characters>
</template>
