<script setup lang="ts">
import type { NavListProps } from '~/components/types'

defineProps<NavListProps>()
</script>

<template>
  <ul data-test="nav-list" class="flex flex-row items-center justify-between space-x-7">
    <NavItem
      v-for="(item, index) in list"
      :key="`nav-item-${index}`"
      data-test="nav-item"
      :item="item"
    />
  </ul>
</template>
