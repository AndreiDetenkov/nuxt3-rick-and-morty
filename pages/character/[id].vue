<script setup lang="ts">
const route = useRoute()
const store = useCharactersStore()

useSeoMeta({
  title: () => `Rick and Morty - ${store.character.name}`,
  ogTitle: () => `Rick and Morty - ${store.character.name}`,
  description: () => `Rick and Morty Api information about ${store.character.name}`,
  ogDescription: () => `Rick and Morty Api information about character - ${store.character.name}`,
  ogImage: () => `https://rickandmortyapi.com/api/character/avatar/${route.params.id}.jpeg`,
})

store.getCharacterById(Number(route.params.id))

const { character, isLoading } = storeToRefs(store)

const episodes = computed<string[]>(() => {
  return character.value.episode.map(item =>
    item.split('/').slice(-1).join(''),
  )
})
</script>

<template>
  <Loading v-if="isLoading" />
  <TheContainer v-else>
    <section
      class="mx-auto mt-7 flex w-full flex-col items-center rounded-xl border p-7 md:w-2/3 lg:w-1/2 xl:w-1/3"
    >
      <lazy-nuxt-img
        :src="character.image"
        class="mb-8 h-auto w-80 rounded-2xl"
      />

      <h2 class="text-center mb-4 text-light-gray text-4xl md:text-5xl font-bold">
        {{ character.name }}
      </h2>

      <ul class="text-xl mb-4 space-y-1">
        <li>Status: {{ character.status }}</li>
        <li>Species: {{ character.species }}</li>
        <li>Type: {{ character.type ? character.type : 'unknown' }}</li>
        <li>Gender: {{ character.gender }}</li>
      </ul>

      <p class="text-2xl text-center mb-4 font-bold transition-colors duration-300 hover:text-orange-400">
        Location -
        <NuxtLink to="/">
          {{ character.location.name }}
        </NuxtLink>
      </p>

      <div class="flex flex-wrap items-center gap-2">
        <span class="text-2xl font-bold">Episode:&nbsp;</span>
        <NuxtLink
          v-for="episode in episodes"
          :key="episode"
          :to="`/episode/${episode}`"
          class="text-xl text-light-gray font-medium transition-colors duration-300 hover:text-orange-400 border rounded grid place-items-center px-2 py-1 min-w-10"
        >
          {{ episode }}
        </NuxtLink>
      </div>
    </section>
  </TheContainer>
</template>
