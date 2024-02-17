<script setup lang="ts">
import NavigationItem from '~/components/Navigation/NavItem.vue'
import type { NavItem } from '~/components/Navigation/NavItem.interface'

defineProps<{
  list: NavItem[]
}>()
</script>

<template>
  <ul class="flex flex-row items-center justify-between space-x-7">
    <NavigationItem
      v-for="(item, index) in list"
      :key="`nav-item-${index}`"
      :item="item"
    />
  </ul>
</template>
