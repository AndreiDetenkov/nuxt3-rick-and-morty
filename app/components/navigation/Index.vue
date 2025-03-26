<script setup lang="ts">
import type { NavItem } from '~/shared/types'

const navList: NavItem[] = [
  {
    name: 'Characters',
    path: '/characters',
  },
  {
    name: 'Episodes',
    path: '/episodes',
  },
]
</script>

<template>
  <nav data-test="nav">
    <navigation-list :list="navList" />
  </nav>
</template>
