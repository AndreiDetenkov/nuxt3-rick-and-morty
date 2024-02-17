<script setup lang="ts">
defineProps<{
  isDarkMode: boolean
}>()

defineEmits<{
  toggleColorMode: [preference: string]
}>()
</script>

<template>
  <button data-test="toggle-button" @click="$emit('toggleColorMode', $colorMode.preference)">
    <svgo-sun v-if="isDarkMode" data-test="sun" class="h-5 w-5 text-primary-light" />
    <svgo-moon v-else data-test="moon" class="h-5 w-5" />
  </button>
</template>
