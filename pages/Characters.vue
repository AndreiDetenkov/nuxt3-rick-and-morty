<script setup lang="ts">
import { Character, Info } from '~/utils/types'

const page = ref(1)
const pageInfo = ref<Info>()
const pageCharacters = ref<Character[]>()

async function getCharactersByPage(): Promise<void> {
  const { data: response } = await useFetch(
    `https://rickandmortyapi.com/api/character?page=${page.value}`
  )

  const { results, info } = response.value as {
    info: Info | null
    results: Character[] | null
  }

  if (info) pageInfo.value = info
  if (results) pageCharacters.value = results
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
          <article class="grid place-items-center gap-4 rounded-xl border p-4">
            <nuxt-img
              :src="character.image"
              :alt="character.name"
              class="h-auto w-52 rounded-xl shadow-xl"
              loading="lazy"
            />
            <nuxt-link :to="`/character/${character.id}`">
              <h2
                class="truncate text-2xl font-bold tracking-wide transition-colors duration-300 ease-in hover:text-orange-400"
              >
                {{ character.name }}
              </h2>
            </nuxt-link>
          </article>
        </div>
      </div>
    </div>

    <div v-if="pageCharacters" class="mb-4 flex w-full items-center justify-center">
      <!-- Previous Button -->
      <button
        class="ml-2 inline-flex items-center rounded-lg border border-gray px-4 py-2 transition-all duration-200 hover:border-orange-400 hover:text-orange-400 disabled:bg-neutral-200 disabled:hover:border-gray disabled:hover:text-dark-gray disabled:dark:bg-neutral-700 disabled:dark:hover:text-neutral-400"
        :disabled="!pageInfo?.prev"
        @click="decreaseHandler"
      >
        <span class="text-sm font-medium">Previous</span>
      </button>

      <!-- Next Button -->
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
