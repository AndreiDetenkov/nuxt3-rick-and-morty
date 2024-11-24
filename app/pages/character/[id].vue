<script setup lang="ts">
const { id } = useRoute().params
const { $api } = useNuxtApp()

const { data: character } = await useAsyncData(`character:${id}`, () => $api.characters.getCharacterById(Number(id)))

useSeoMeta({
  title: () => `${character.value?.name}`,
  ogTitle: () => `${character.value?.name}`,
  description: () => 'Information about character from Rick and Morty Api',
  ogDescription: () => 'Information about character from Rick and Morty Api',
  ogImage: () => `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`,
})
</script>

<template>
  <section-character>
    <character-info :character="character" />
  </section-character>
</template>
