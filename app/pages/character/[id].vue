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
  <base-container v-else>
    <section
      class="mx-auto mt-7 rounded-xl border p-7 w-full md:w-2/3 lg:w-2/4 xl:w-2/5 2xl:w-1/3 relative"
    >
      <close-button class="absolute -top-4 -right-4" @on-click="$router.back()" />
      <character-info :character="store.character" />
    </section>
  </base-container>
</template>
