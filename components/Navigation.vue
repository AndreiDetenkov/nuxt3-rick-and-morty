<script setup lang="ts">
import type { NavItem } from '~/utils/types'

const navList: NavItem[] = [
  {
    name: 'Characters',
    path: '/characters',
  },
]
</script>

<template>
  <nav data-test="nav" class="flex items-center space-x-6">
    <NavList :list="navList" />
  </nav>
</template>
