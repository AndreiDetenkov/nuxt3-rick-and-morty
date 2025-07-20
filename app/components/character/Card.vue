<script setup lang="ts">
import type { Character } from '~/shared/types'
import Card from '~/components/ui/card/Card.vue'

const { character } = defineProps<{ character: Character }>()
</script>

<template>
  <Card
    class="cursor-pointer"
    @click="navigateTo({ name: 'character-id', params: { id: character.id } })"
  >
    <nuxt-img
      :src="character.image"
      :alt="character.name"
      class="h-62 lg:h-54 w-full rounded-t-lg object-fill"
      placeholder
      loading="lazy"
    />
    <card-header>
      <card-title data-test="character-title">
        {{ character.name }}
      </card-title>
      <div data-test="character-status" class="flex items-center">
        <live-indicator data-test="character-status-indicator" :status="character.status" />
        {{ character.status }} - {{ character.species }}
      </div>
    </card-header>
  </Card>
</template>
