<script setup lang="ts">
useSeoMeta({
  title: 'Rick and Morty - Main Page',
  ogTitle: 'Rick and Morty - Main Page',
  description: 'Rick and Morty Api random characters',
  ogDescription: 'Rick and Morty Api random characters',
  ogImage: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
})

const { $api } = useNuxtApp()
const { data: characters } = await useAsyncData('randomCharacters', () => $api.characters.getRandom())
</script>

<template>
  <section-hero />

  <section-characters>
    <character-card
      v-for="character in characters"
      :key="character.created"
      :character="character"
    />
  </section-characters>
</template>
