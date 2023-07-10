<script setup lang="ts">
import { Character, Info } from '~/utils/types'
import CharacterCard from '~/components/CharacterCard.vue'

const page = ref(1)
const loading = ref<boolean>(false)
const pageInfo = ref<Info>()
const pageCharacters = ref<Character[]>()

async function getCharactersByPage(): Promise<void> {
  loading.value = true
  const { data: response } = await useFetch(
    `https://rickandmortyapi.com/api/character?page=${page.value}`
  )

  const { results, info } = response.value as {
    info: Info | null
    results: Character[] | null
  }

  if (info) pageInfo.value = info
  if (results) pageCharacters.value = results

  loading.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onBeforeMount(() => {
  getCharactersByPage()
})

function increaseHandler(): void {
  page.value += 1
  getCharactersByPage()
}

function decreaseHandler(): void {
  page.value -= 1
  getCharactersByPage()
}
</script>

<template>
  <section class="container mx-auto">
    <div class="p-6 md:px-0 md:py-16">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div v-for="character in pageCharacters" :key="character.id">
          <character-card :character="character" />
        </div>
      </div>
    </div>

    <div v-if="pageCharacters" class="mb-8 flex w-full items-center justify-center">
      <button
        class="ml-2 inline-flex items-center rounded-lg border border-gray px-4 py-2 transition-all duration-200 hover:border-orange-400 hover:text-orange-400 disabled:bg-neutral-200 disabled:hover:border-gray disabled:hover:text-dark-gray disabled:dark:bg-neutral-700 disabled:dark:hover:text-neutral-400"
        :disabled="!pageInfo?.prev"
        @click="decreaseHandler"
      >
        <span class="text-sm font-medium">Previous</span>
      </button>

      <button
        class="ml-2 inline-flex items-center rounded-lg border border-gray px-4 py-2 transition-all duration-200 hover:border-orange-400 hover:text-orange-400 disabled:bg-neutral-200 disabled:hover:border-gray disabled:hover:text-dark-gray disabled:dark:bg-neutral-700 disabled:dark:hover:text-neutral-400"
        :disabled="!pageInfo?.next"
        @click="increaseHandler"
      >
        <span class="text-sm font-medium">Next</span>
      </button>
    </div>
  </section>
</template>
