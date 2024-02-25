<script setup lang="ts">
defineProps<{
  isDarkMode: boolean
}>()

defineEmits<{
  toggleColorMode: [preference: string]
}>()
</script>

<template>
  <button
    data-test="toggle-button"
    class="border rounded-lg hover:border-primary dark:border-primary dark:hover:border-primary-light transition duration-300 flex items-center justify-center p-2"
    @click="$emit('toggleColorMode', $colorMode.preference)"
  >
    <svgo-sun v-if="isDarkMode" data-test="sun" class="h-4 w-4" />
    <svgo-moon v-else data-test="moon" class="h-4 w-4" />
  </button>
</template>
