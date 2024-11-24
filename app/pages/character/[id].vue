<script setup lang="ts">
const route = useRoute()
const store = useCharactersStore()

useSeoMeta({
  title: () => `Rick and Morty - ${store.character.name}`,
  ogTitle: () => `Rick and Morty - ${store.character.name}`,
  description: () => `Rick and Morty Api information about character -  ${store.character.name}`,
  ogDescription: () => `Rick and Morty Api information about character - ${store.character.name}`,
  ogImage: () => `https://rickandmortyapi.com/api/character/avatar/${route.params.id}.jpeg`,
})

store.getCharacterById(Number(route.params.id))
</script>

<template>
  <loading v-if="store.isLoading" />
  <section-character v-else>
    <character-info :character="store.character" />
  </section-character>
</template>
