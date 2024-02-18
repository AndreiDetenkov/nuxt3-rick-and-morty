<script setup lang="ts">
import NavigationList from '~/components/Navigation/NavList.vue'
import type { NavItem } from '~/components/Navigation/types'

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
