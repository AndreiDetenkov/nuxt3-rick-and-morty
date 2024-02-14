<script setup lang="ts">
</script>

<template>
  <section id="hero" class="h-[calc(50vh_-_60px)]">
    <div class="relative grid place-items-center h-full">
      <h1
        class="z-10 text-center text-5xl font-black text-title dark:text-primary-light sm:text-6xl md:text-7xl lg:text-8xl"
      >
        The Rick and Morty
      </h1>
      <div class="absolute bottom-0 left-0 right-0 h-full w-full p-4">
        <svgo-hero :font-controlled="false" class="h-full w-full fill-primary-lighter dark:fill-primary-light/20" />
      </div>
    </div>
  </section>
</template>
