<script setup lang="ts">
import { Character } from '~/utils/types'

const characters = ref<Character[] | null>(null)
const info = ref({})

onMounted(() => {
  getCharacters()
})

async function getCharacters(url = '') {
  const defaultUrl = 'https://rickandmortyapi.com/api/character'

  const { data } = await useFetch(!url ? defaultUrl : url)

  characters.value = data.value?.results
  info.value = data.value?.info
}
</script>

<template>
  <div>
    <pre>{{ info }}</pre>

    <div class="flex items-center">
      <!-- Previous Button -->
      <button
        type="button"
        class="text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 inline-flex items-center rounded-lg border bg-white px-4 py-2 text-sm font-medium disabled:bg-neutral-200 dark:hover:text-white"
        :disabled="!info?.prev"
        @click="getCharacters(info?.prev)"
      >
        Previous
      </button>

      <!-- Next Button -->
      <button
        class="text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 ml-3 inline-flex items-center rounded-lg border bg-white px-4 py-2 text-sm font-medium disabled:bg-neutral-200 dark:hover:text-white"
        :disabled="!info?.next"
        @click="getCharacters(info?.next)"
      >
        Next
      </button>
    </div>
  </div>
</template>
