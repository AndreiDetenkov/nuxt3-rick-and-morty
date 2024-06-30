<script setup lang="ts">
useSeoMeta({
  title: 'Rick and Morty - Main Page',
  ogTitle: 'Rick and Morty - Main Page',
  description: 'Rick and Morty Api random characters',
  ogDescription: 'Rick and Morty Api random characters',
  ogImage: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
})

const store = useCharactersStore()
store.getRandomCharacters()
</script>

<template>
  <section class="h-[calc(40vh)] pt-4 border-b dark:border-b-primary">
    <SectionHero />
  </section>

  <section class="py-20 border-b dark:border-b-primary">
    <SectionCharacters>
      <CharacterCard
        v-for="character in store.characters"
        :key="character.id.toString()"
        :character="character"
      />
    </SectionCharacters>
  </section>
</template>
