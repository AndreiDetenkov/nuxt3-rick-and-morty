<script setup lang="ts">
import { Character, Info } from '~/utils/types'

const { data: response, pending } = await useFetch(
  'https://rickandmortyapi.com/api/character'
)

const { results } = response.value as {
  info: Info
  results: Character[]
}
</script>

<template>
  <section class="container mx-auto">
    <div v-if="pending">Loading...</div>
    <div v-else>
      <div class="p-6 md:px-0 md:py-16">
        <div
          class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
        >
          <div v-for="card in results" :key="card.id">
            <article
              class="grid place-items-center gap-4 rounded-xl border p-4"
            >
              <nuxt-img
                :src="card.image"
                :alt="card.name"
                class="h-auto w-full rounded-xl"
                loading="lazy"
              />
              <h2 class="truncate text-2xl font-bold tracking-wide">
                {{ card.name }}
              </h2>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  <div class="flex items-center">-->
  <!--    &lt;!&ndash; Previous Button &ndash;&gt;-->
  <!--    <button-->
  <!--      type="button"-->
  <!--      class="text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 inline-flex items-center rounded-lg border bg-white px-4 py-2 text-sm font-medium disabled:bg-neutral-200 dark:hover:text-white"-->
  <!--      :disabled="!data?.info.prev"-->
  <!--      @click="getCharacters(data?.info.prev)"-->
  <!--    >-->
  <!--      Previous-->
  <!--    </button>-->

  <!--    &lt;!&ndash; Next Button &ndash;&gt;-->
  <!--    <button-->
  <!--      class="text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 ml-3 inline-flex items-center rounded-lg border bg-white px-4 py-2 text-sm font-medium disabled:bg-neutral-200 dark:hover:text-white"-->
  <!--      :disabled="!info?.next"-->
  <!--      @click="getCharacters(info?.next)"-->
  <!--    >-->
  <!--      Next-->
  <!--    </button>-->
  <!--  </div>-->
</template>
