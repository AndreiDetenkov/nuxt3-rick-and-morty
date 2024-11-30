<script setup lang="ts">
import type { NavItemProps } from '~/shared/types'

defineProps<NavItemProps>()
</script>

<template>
  <NuxtLink
    data-test="nav-item"
    :to="item.path"
    class="
      text-lg
      text-primary
      font-medium
      transition-colors
      duration-300
      hover:text-orange-400
      dark:text-primary-light
      dark:transition-colors
      dark:duration-300
      dark:hover:text-orange-400"
    active-class="text-orange-400"
  >
    {{ item.name }}
  </NuxtLink>
</template>
