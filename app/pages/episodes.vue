<script setup lang="ts">
const { $api } = useNuxtApp()
const { data: episodes } = await useAsyncData('episodes', () => $api.episodes.getAll())

const episodesExist = computed<boolean>(() => !!episodes.value?.results.length)

function getCharacterId(item: string) {
  return item.split('/').slice(-1).join('/')
}
</script>

<template>
  <BaseSection>
    <template v-if="episodesExist">
      <Card v-for="episode in episodes?.results" :key="episode.id">
        <CardHeader>
          <CardTitle>{{ episode.name }}</CardTitle>
          <CardDescription>{{ episode.episode }}</CardDescription>
          <CardContent>
            Characters:
            <NuxtLink
              v-for="(item, index) in episode.characters"
              :key="`item${index}`"
              class="mr-2 inline-flex transition-colors duration-300 hover:text-orange-400"
              :to="{
                name: 'character-id',
                params: { id: getCharacterId(item) },
              }"
            >
              {{ getCharacterId(item) }}
            </NuxtLink>
          </CardContent>
        </CardHeader>
      </Card>
    </template>
  </BaseSection>
</template>
