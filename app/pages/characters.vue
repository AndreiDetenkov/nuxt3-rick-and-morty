<script setup lang="ts">
useSeoMeta({
  title: 'Rick and Morty - Characters Page',
  ogTitle: 'Rick and Morty - Characters Page',
  description: 'Rick and Morty all characters',
  ogDescription: 'Rick and Morty all characters',
  ogImage: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
})

const store = useCharactersStore()
const { getCharactersByPage } = store
const { characters, pageInfo, isLoading } = storeToRefs(store)

onMounted(() => {
  getCharactersByPage(1)
})

function onPrevHandler(page: number): void {
  getCharactersByPage(page)
}

function onNextHandler(page: number): void {
  getCharactersByPage(page)
}
</script>

<template>
  <Loading v-if="isLoading" />

  <section class="py-10">
    <TheContainer class="grid md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-6 mb-10">
      <CharacterCard
        v-for="character in characters"
        :key="character.id.toString()"
        :character="character"
      />
    </TheContainer>

    <TheContainer class="flex justify-center">
      <ThePagination
        :pages="pageInfo.pages"
        @prev="onPrevHandler"
        @next="onNextHandler"
      />
    </TheContainer>
  </section>
</template>
