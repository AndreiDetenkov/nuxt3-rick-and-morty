<script setup lang="ts">
import { useSeoMeta } from '#imports'

import HeroSection from '~/components/HeroSection.vue'
import CharactersSection from '~/components/CharactersSection.vue'

useSeoMeta({
  title: 'Rick and Morty - Main Page',
  ogTitle: 'Rick and Morty - Main Page',
  description: 'Rick and Morty Api random characters',
  ogDescription: 'Rick and Morty Api random characters',
  ogImage: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
})
</script>

<template>
  <section class="h-[calc(40vh)] py-4">
    <HeroSection />
  </section>

  <section class="py-20">
    <CharactersSection />
  </section>
</template>
