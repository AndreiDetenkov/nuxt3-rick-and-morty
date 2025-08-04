<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})
</script>

<template>
  <base-button
    data-test="toggle-button"
    :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
    color="neutral"
    variant="ghost"
    class="hover:border-primary dark:border-primary dark:hover:border-primary-light flex items-center justify-center rounded-lg border p-2 transition duration-300"
    @click="isDark = !isDark"
  >
    <template #fallback>
      <div class="size-8" />
    </template>
  </base-button>
</template>
