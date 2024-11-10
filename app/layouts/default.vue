<script setup lang="ts">
const colorMode = useColorMode()

const isDarkMode = computed(() => {
  return colorMode.preference === 'dark'
})

function toggleColorMode(preference: string) {
  colorMode.preference = preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="h-dvh w-dvw flex flex-col">
    <TheHeader>
      <template #logo>
        <TheLogo />
      </template>

      <template #nav>
        <Navigation />
        <ToggleColorMode :is-dark-mode="isDarkMode" @toggle-color-mode="toggleColorMode" />
      </template>
    </TheHeader>

    <main class="flex-1">
      <slot />
    </main>

    <footer>
      <TheFooter />
    </footer>
  </div>
</template>
