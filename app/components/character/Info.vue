<script setup lang="ts">
import type { Character, LocationProp } from '~/shared/types'
import { Button } from '~/components/ui/button'

const { character } = defineProps<{
  character: Character
}>()

const location = computed<LocationProp>(() => {
  return {
    name: character.location.name,
    id: character.location.url.split('/').slice(-1).join(''),
  }
})

const episodes = computed<string[]>(() => {
  return character.episode.map((item: string) => item.split('/').slice(-1).join(''))
})
</script>

<template>
  <Card data-test="info" class="grid grid-cols-1 md:grid-cols-auto-1fr md:justify-start">
    <div class="m-4 grid place-items-center md:place-items-start">
      <lazy-nuxt-img :src="character.image" class="w-max-80 w-full rounded-lg md:h-80 md:w-80" />
    </div>
    <div>
      <card-header>
        <card-title>{{ character.name }}</card-title>
      </card-header>

      <card-content>
        <character-info-list
          :status="character.status"
          :gender="character.gender"
          :species="character.species"
          :type="character.type"
        />
        <character-info-divider />
        <character-info-location-link :location="location" class="mb-4" />
        <character-info-divider />
        <character-info-episode-links :episodes="episodes" />
      </card-content>

      <card-footer>
        <Button class="mt-4" @click.prevent="$router.back()"> Back </Button>
      </card-footer>
    </div>
  </Card>
</template>
