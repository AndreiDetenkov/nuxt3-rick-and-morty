<script setup lang="ts">
useSeoMeta({
  title: 'Rick and Morty - Characters Page',
  ogTitle: 'Rick and Morty - Characters Page',
  description: 'Rick and Morty all characters',
  ogDescription: 'Rick and Morty all characters',
  ogImage: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
})

const page = ref(1)

const store = useCharactersStore()
const { characters, pageInfo, isLoading } = storeToRefs(store)

onMounted(() => store.getCharactersByPage(page.value))

function prevAction() {
  if (page.value > 1) {
    page.value--
    store.getCharactersByPage(page.value)
  }
}

function nextAction() {
  if (pageInfo.value.next) {
    page.value++
    store.getCharactersByPage(page.value)
  }
}
</script>

<template>
  <Loading v-if="isLoading" />
  <section v-else class="py-10">
    <TheContainer class="grid md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-6 mb-10">
      <CharacterCard v-for="character in characters" :key="character.id.toString()" :character="character" />
    </TheContainer>

    <TheContainer class="flex justify-center">
      <ThePagination :page="page" :pages="pageInfo.pages" @prev="prevAction" @next="nextAction" />
    </TheContainer>
  </section>
</template>
