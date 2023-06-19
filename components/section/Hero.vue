<script setup lang="ts">
import Hero from 'assets/icons/hero.svg?skipsvgo'
</script>

<template>
  <section class="section">
    <app-title title="The Rick and Morty" />
    <div class="absolute bottom-0 left-0 right-0 h-full w-full">
      <Hero class="h-full w-full fill-light-gray dark:fill-gray/40" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  @apply relative flex h-[calc(50vh_-_60px)] flex-col items-center justify-center border-b-[1px] border-neutral-200 text-center dark:border-neutral-600;
}
</style>
