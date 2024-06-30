<script setup lang="ts">
useSeoMeta({
  title: 'Rick and Morty - Characters Page',
  ogTitle: 'Rick and Morty - Characters Page',
  description: 'Rick and Morty Api all characters',
  ogDescription: 'Rick and Morty Api all characters',
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
    <SectionCharacters class="mb-10">
      <CharacterCard
        v-for="character in characters"
        :key="character.id.toString()"
        :character="character"
      />
    </SectionCharacters>

    <TheContainer class="flex justify-center">
      <ThePagination @prev="prevAction" @next="nextAction" />
    </TheContainer>
  </section>
</template>
