<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import MoonIcon from 'assets/icons/moon.svg'
import SunIcon from 'assets/icons/sun.svg'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button class="" @click="toggleDark()">
    <SunIcon v-if="isDark" class="h-5 w-5 text-neutral-400" />
    <MoonIcon v-else class="h-5 w-5" />
  </button>
</template>
