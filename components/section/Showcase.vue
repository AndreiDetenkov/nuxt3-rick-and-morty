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

<script setup lang="ts">
import ShowcaseCard from '~/components/section/ShowcaseCard.vue'

const { data } = await useFetch('/api/characters')
</script>

<style scoped lang="scss">
.section {
  @apply flex min-h-[calc(50vh_-_60px)] items-center justify-center bg-dark-gray-darker py-16 dark:bg-slate-800;
}
.container {
  @apply flex max-w-[1920px] flex-wrap items-center justify-center;
}
</style>
