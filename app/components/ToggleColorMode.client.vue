<script setup lang="ts">
import IconMoon from '~/assets/icons/moon.svg'
import IconSun from '~/assets/icons/sun.svg'

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
    <IconSun v-if="isDarkMode" data-test="sun" class="h-4 w-4" />
    <IconMoon v-else data-test="moon" class="h-4 w-4" />
  </button>
</template>
