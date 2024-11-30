<script setup lang="ts">
import type { NavListProps } from '~/shared/types'

defineProps<NavListProps>()
</script>

<template>
  <ul data-test="nav-list" class="flex flex-row items-center space-x-7">
    <navigation-item
      v-for="(item, index) in list"
      :key="`nav-item-${index}`"
      data-test="nav-item"
      :item="item"
    />
  </ul>
</template>
