<script setup lang="ts">
import type { CharacterInfoListProp } from '~/shared/types'

const { status, species, type, gender } = defineProps<CharacterInfoListProp>()
</script>

<template>
  <ul class="text-lg space-y-1">
    <li class="flex items-center">
      Status: {{ status }}
    </li>
    <li class="flex items-center">
      Species: {{ species }}
    </li>
    <li class="flex items-center">
      Type: {{ type }}
    </li>
    <li class="flex items-center">
      Gender: {{ gender }}
    </li>
  </ul>
</template>
