<script setup lang="ts">
import ShowcaseCard from '~/components/section/ShowcaseCard.vue'

const { data } = await useFetch('/api/characters')
</script>

<template>
  <section class="flex min-h-[calc(50vh_-_60px)] items-center justify-center">
    <div
      class="flex max-w-[1920px] flex-wrap items-center justify-center p-6 md:px-0 md:py-16"
    >
      <showcase-card
        v-for="character in data?.characters"
        :key="character.id"
        :character="character"
      />
    </div>
  </section>
</template>
