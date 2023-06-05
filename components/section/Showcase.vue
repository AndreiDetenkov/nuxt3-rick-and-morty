<script setup lang="ts">
import ShowcaseCard from '~/components/section/ShowcaseCard.vue'

const { data } = await useFetch('/api/characters')
</script>

<template>
  <section class="section">
    <div class="container">
      <showcase-card
        v-for="character in data"
        :key="character.id"
        :character="character"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  @apply flex min-h-[calc(50vh_-_60px)] items-center justify-center bg-dark-gray-darker dark:bg-slate-800;
}
.container {
  @apply flex max-w-[1920px] flex-wrap items-center justify-center p-6 md:px-0 md:py-16;
}
</style>
