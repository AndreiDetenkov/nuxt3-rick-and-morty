<script setup lang="ts">
const { $api } = useNuxtApp()
const { data: episodes } = await useAsyncData('episodes', () => $api.episodes.getAll())
</script>

<template>
  <BaseSection>
    <Card v-for="episode in episodes?.results" :key="episode.id">
      <CardHeader>
        <CardTitle>{{ episode.name }}</CardTitle>
      </CardHeader>
    </Card>
  </BaseSection>
</template>
