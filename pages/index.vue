<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import CharactersSection from '~/components/CharactersSection.vue'
</script>

<template>
  <section class="h-[calc(40vh)] py-4">
    <HeroSection />
  </section>

  <section class="bg-primary-darker py-20">
    <CharactersSection />
  </section>
</template>
