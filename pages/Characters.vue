<script setup lang="ts">
import { useCharactersStore } from '~/stores/characters'

const page = ref(2)

const store = useCharactersStore()
store.getCharactersByPage(page.value)
</script>

<template>
  <section class="py-10">
    <CharactersSection>
      <CharacterCard
        v-for="character in store.characters"
        :key="character.id.toString()"
        :character="character"
      />
    </CharactersSection>
  </section>
</template>
