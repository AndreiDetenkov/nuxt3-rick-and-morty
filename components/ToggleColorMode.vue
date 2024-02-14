<script setup lang="ts">
const colorMode = useColorMode()

const isDarkMode = computed(() => {
  return colorMode.preference === 'dark'
})

function toggleMode(preference: string) {
  colorMode.preference = preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <client-only>
    <button @click="toggleMode($colorMode.preference)">
      <svgo-sun v-if="isDarkMode" class="h-5 w-5 text-primary-light" />
      <svgo-moon v-else class="h-5 w-5" />
    </button>
  </client-only>
</template>
