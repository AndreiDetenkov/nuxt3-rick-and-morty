<script setup lang="ts">
const { $api } = useNuxtApp()
const { data: episodes } = await useAsyncData('episodes', () => $api.episodes.getAll())
</script>

<template>
  <section class="border-b border-t py-10 dark:border-b-primary dark:border-t-primary lg:py-20">
    <base-container>
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <card v-for="episode in episodes?.results" :key="episode.id">
          <card-header>
            <card-title>{{ episode.name }}</card-title>
          </card-header>
        </card>
      </div>
    </base-container>
  </section>
</template>
