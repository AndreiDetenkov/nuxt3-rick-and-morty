<script setup lang="ts">
import CharacterCard from '~/components/CharacterCard.vue'
import TheContainer from '~/components/TheContainer.vue'
import { useCharactersStore } from '~/stores/characters.js'

const store = useCharactersStore()
store.getRandomCharacters()
</script>

<template>
  <TheContainer>
    <div class="grid sm:grid-cols-2 gap-8">
      <CharacterCard
        v-for="character in store.characters"
        :key="character.id.toString()"
        :character="character"
      />
    </div>
  </TheContainer>
</template>
