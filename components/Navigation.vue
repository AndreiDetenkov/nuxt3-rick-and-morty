<script setup lang="ts">
import NavigationList from '~/components/NavList.vue'
import type { NavItem } from '~/components/types'

const navList: NavItem[] = [
  {
    name: 'Characters',
    path: '/characters',
  },
]
</script>

<template>
  <nav data-test="nav" class="flex items-center space-x-6">
    <NavigationList :list="navList" />
  </nav>
</template>
