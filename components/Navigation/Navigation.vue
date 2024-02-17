<script setup lang="ts">
import NavigationList from '~/components/Navigation/NavList.vue'
import type { NavItem } from '~/components/Navigation/NavItem.interface'

const navList: NavItem[] = [
  {
    name: 'Characters',
    path: '/characters',
  },
]
</script>

<template>
  <nav class="flex flex-row items-center space-x-6">
    <NavigationList :list="navList" />
  </nav>
</template>
