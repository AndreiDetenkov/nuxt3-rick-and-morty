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
    <header>
      <BaseHeader>
        <template #logo>
          <BaseLogo />
        </template>

        <div class="w-full" />
        <!-- <Navigation /> -->
        <ToggleColorMode :is-dark-mode="isDarkMode" @toggle-color-mode="toggleColorMode" />
      </BaseHeader>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer>
      <BaseFooter />
    </footer>
  </div>
</template>
