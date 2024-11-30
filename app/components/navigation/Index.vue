<script setup lang="ts">
import type { NavItem } from '~/shared/types'

const navList: NavItem[] = [
  {
    name: 'Characters',
    path: '/characters',
  },
]
</script>

<template>
  <nav data-test="nav">
    <navigation-list :list="navList" />
  </nav>
</template>
