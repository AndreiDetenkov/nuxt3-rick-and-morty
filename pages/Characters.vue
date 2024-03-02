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
store.getCharactersByPage(page.value)
</script>

<template>
  <section class="py-10">
    <SectionCharacters>
      <CharacterCard
        v-for="character in store.characters"
        :key="character.id.toString()"
        :character="character"
      />
    </SectionCharacters>
  </section>
</template>
