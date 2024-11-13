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
  <nav data-test="nav">
    <NavList :list="navList" />
  </nav>
</template>
