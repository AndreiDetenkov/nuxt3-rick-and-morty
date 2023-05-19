<script setup lang="ts">
import Hero from 'assets/icons/hero.svg?skipsvgo'
</script>

<template>
  <section
    class="relative flex h-[calc(50vh_-_60px)] flex-col items-center justify-center text-center"
  >
    <h1
      class="z-10 text-5xl font-black text-dark-gray sm:text-6xl md:text-7xl lg:text-8xl"
    >
      The Rick and Morty
    </h1>
    <div class="absolute bottom-0 left-0 right-0 h-full w-full">
      <Hero class="h-full w-full fill-light-gray" />
    </div>
  </section>
</template>
