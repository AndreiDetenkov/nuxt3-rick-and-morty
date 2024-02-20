<script setup lang="ts">
import { useCharactersStore } from '~/stores/characters'
import CharacterCard from '~/components/Card/CharacterCard.vue'
import HeroSection from '~/components/HeroSection.vue'

const store = useCharactersStore()
store.getCharactersByIds()
</script>

<template>
  <section class="h-[calc(40vh)] py-4">
    <HeroSection />
  </section>

  <section class="grid sm:grid-cols-2 gap-8">
    <CharacterCard
      v-for="character in store.characters"
      :key="character.id.toString()"
      :character="character"
    />
  </section>
</template>
