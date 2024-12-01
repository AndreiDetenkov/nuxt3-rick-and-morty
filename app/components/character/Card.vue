<script setup lang="ts">
import Card from '~/components/ui/card/Card.vue'
import type { Character } from '~/shared/types'

const { character } = defineProps<{ character: Character }>()
</script>

<template>
  <Card
    class="cursor-pointer"
    @click="navigateTo({ name: 'character-id', params: { id: character.id } })"
  >
    <lazy-nuxt-img
      :src="character.image"
      :alt="character.name"
      class="w-full h-62 lg:h-54 object-fill rounded-t-lg"
    />
    <card-header>
      <card-title data-test="character-title">
        {{ character.name }}
      </card-title>
      <div
        data-test="character-status"
        class="flex items-center"
      >
        <live-indicator
          data-test="character-status-indicator"
          :status="character.status"
        />
        {{ character.status }} - {{ character.species }}
      </div>
    </card-header>
  </Card>
</template>
