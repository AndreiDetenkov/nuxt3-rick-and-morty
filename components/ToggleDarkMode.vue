<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import MoonIcon from 'assets/icons/moon.svg?skipsvgo'
import SunIcon from 'assets/icons/sun.svg?skipsvgo'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()">
    <SunIcon v-if="isDark" class="h-5 w-5 text-gray-lighten" />
    <MoonIcon v-else class="h-5 w-5" />
  </button>
</template>
