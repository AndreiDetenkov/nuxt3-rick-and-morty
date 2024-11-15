<script setup lang="ts">
import type { Character } from '~/stores/types'
// import type { LocationProp } from '~/utils/types'

const { character } = defineProps<{ character: Character }>()

// const episode = computed<string>(() => {
//   return props.character.episode[0].split('/').slice(-1).join('')
// })

// const location = computed<LocationProp>(() => {
//   return {
//     id: props.character.location.url.split('/').slice(-1).join(''),
//     name: props.character.location.name,
//   }
// })
</script>

<template>
  <CharacterCardWrapper>
    <CharacterCardImage :image="character.image" :name="character.name" />

    <CharacterCardContentWrapper>
      <!--      <CharacterCardInfo :character="character" /> -->
      <!--      <CharacterCardLocation :location="location" /> -->
      <!--      <CharacterCardFirstSeen :episode="episode" /> -->
    </CharacterCardContentWrapper>
  </CharacterCardWrapper>
</template>
