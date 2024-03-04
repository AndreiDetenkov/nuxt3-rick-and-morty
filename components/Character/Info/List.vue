<script setup lang="ts">
import type { CharacterInfoListProp } from '~/components/types'

defineProps<{
  list: CharacterInfoListProp
}>()
</script>

<template>
  <ul class="text-xl mb-4 space-y-2">
    <li class="flex items-center">
      <svgo-pulse class="h-6 w-6 mr-2 fill-primary-light" />
      Status: {{ list.status }}
    </li>
    <li class="flex items-center">
      <svgo-location class="h-6 w-6 mr-2 fill-primary-light" />
      Species: {{ list.species }}
    </li>
    <li class="flex items-center">
      <svgo-account class="h-6 w-6 mr-2 fill-primary-light" />
      Type: {{ list.type }}
    </li>
    <li class="flex items-center">
      <svgo-gender class="h-6 w-6 mr-2 fill-primary-light" />
      Gender: {{ list.gender }}
    </li>
  </ul>
</template>
