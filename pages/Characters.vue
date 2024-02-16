<script setup lang="ts">
import { useCharactersStore } from '~/stores/characters'

const page = ref(2)

const store = useCharactersStore()
store.getCharactersByPage(page.value)
</script>

<template>
  <h1>Characters page</h1>
  <pre>{{ store.characters }}</pre>
</template>
