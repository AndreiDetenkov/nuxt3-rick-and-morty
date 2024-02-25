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

const { character, isLoading } = storeToRefs(store)
</script>

<template>
  <Loading v-if="isLoading" />
  <TheContainer v-else>
    <section
      class="mx-auto mt-7 flex w-full flex-col items-center rounded-xl border p-7 md:w-2/3 lg:w-1/2 xl:w-1/3"
    >
      <CharacterInfo :character="character" />
    </section>
  </TheContainer>
</template>
